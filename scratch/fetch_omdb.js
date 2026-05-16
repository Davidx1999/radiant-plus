const fs = require('fs');

const API_KEY = '90dbf571';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

async function fetchCategory(query) {
    try {
        console.log(`Fetching ${query}...`);
        const response = await fetch(`${BASE_URL}&s=${query}&type=movie`);
        const data = await response.json();
        console.log(`${query} found: ${data.Search ? data.Search.length : 0} items`);
        return data.Search || [];
    } catch (e) {
        console.error(`Error fetching ${query}:`, e);
        return [];
    }
}

async function main() {
    console.log('Fetching movies from OMDB...');

    const actionMovies = await fetchCategory('action');
    const comedyMovies = await fetchCategory('comedy');
    const scifiMovies = await fetchCategory('sci-fi');
    const horrorMovies = await fetchCategory('horror');

    // Get more details for featured ones
    const featuredTitles = ['The Dark Knight', 'Dune: Part Two', 'Oppenheimer', 'The Batman', 'Spider-Man: Across the Spider-Verse', 'Gladiator II'];
    const featuredDetails = [];
    for (const title of featuredTitles) {
        try {
            console.log(`Fetching details for ${title}...`);
            const details = await fetch(`${BASE_URL}&t=${encodeURIComponent(title)}`).then(r => r.json());
            if (details.Response === "True") {
                featuredDetails.push({
                    title: details.Title,
                    isSeries: details.Type === 'series',
                    nextEpisode: details.Type === 'series' ? "Novos episódios toda sexta-feira" : null,
                    classification: details.Rated === 'R' ? '18' : (details.Rated === 'PG-13' ? '14' : 'L'),
                    year: details.Year,
                    genre: details.Genre,
                    synopsis: details.Plot,
                    image: details.Poster !== "N/A" ? details.Poster : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                });
            }
        } catch (e) {
            console.error(`Error fetching details for ${title}:`, e);
        }
    }

    const mockDataContent = `
export const categories = [
    { title: 'Continuar a Ver', seed: 'scifi', type: 'progress', movies: ${JSON.stringify(scifiMovies.slice(0, 8))} },
    { title: 'Top 10 Hoje no País', seed: 'action', type: 'top10', movies: ${JSON.stringify(actionMovies.slice(0, 10))} },
    { title: 'Ação e Adrenalina', seed: 'horror', type: 'standard', movies: ${JSON.stringify(horrorMovies.slice(0, 10))} },
    { title: 'Comédias para Relaxar', seed: 'comedy', type: 'standard', movies: ${JSON.stringify(comedyMovies.slice(0, 10))} }
];

export const fictionalTitles = [];

export const featuredContent = ${JSON.stringify(featuredDetails)};
`;

    fs.writeFileSync('c:/Users/Profile 2/Desktop/Work/Projetos/Radiant Pattern teste/js/data/mockData.js', mockDataContent);
    console.log('mockData.js updated with real OMDB data!');
}

main().catch(err => console.error(err));
