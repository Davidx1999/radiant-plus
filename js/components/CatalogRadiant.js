export const CatalogRadiant = (categories, fictionalTitles, featuredList, featuredIndex = 0) => {
    const featured = featuredList[featuredIndex];
    
    let categoriesHtml = '';
    
    categories.forEach((cat, catIndex) => {
        let itemsHtml = '';
        
        cat.movies.forEach((movie, i) => {
            const movieTitle = movie.Title;
            const imgUrl = movie.Poster !== "N/A" ? movie.Poster : `https://picsum.photos/seed/${cat.seed}${i}/400/225`;

            if (cat.type === 'top10') {
                itemsHtml += `
                    <div class="shrink-0 w-44 md:w-56 aspect-[2/3] bg-transparent rounded-md group cursor-pointer snap-start relative transition-all duration-300 flex items-end justify-end">
                        <span class="absolute -left-2 sm:-left-4 bottom-2 text-7xl sm:text-9xl font-black text-stroke-radiant transition-colors duration-300 z-10 leading-none">${i + 1}</span>
                        <div class="w-[80%] h-full rounded-md overflow-hidden relative shadow-lg border border-radiant-lightblue/10 group-hover:border-radiant-blue transition-all duration-300 z-0">
                            <img src="${imgUrl}" alt="${movieTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                            <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <i data-lucide="play-circle" class="w-12 h-12 text-white drop-shadow-lg"></i>
                            </div>
                        </div>
                    </div>`;
            } else {
                const progressBar = cat.type === 'progress'
                    ? `<div class="absolute bottom-0 left-0 w-full h-1.5 bg-radiant-lightblue/20"><div class="h-full bg-radiant-blue" style="width: ${Math.floor(Math.random() * 80 + 10)}%"></div></div>`
                    : '';

                itemsHtml += `
                    <div class="shrink-0 w-64 md:w-80 aspect-video rounded-lg overflow-hidden group cursor-pointer snap-start relative border transition-all duration-300 bg-radiant-surface border-radiant-lightblue/10 hover:border-radiant-blue shadow-sm hover:shadow-radiant-blue/10">
                        <img src="${imgUrl}" alt="Thumbnail de ${movieTitle}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        ${progressBar}
                        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div class="flex justify-between items-end w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <span class="text-radiant-white font-black text-sm truncate block mb-1">${movieTitle}</span>
                                    <span class="text-[10px] text-white/60 font-semibold border border-white/20 px-1 rounded">14</span>
                                </div>
                                <i data-lucide="play-circle" class="w-8 h-8 text-white shrink-0 drop-shadow-md hover:scale-110 transition-transform"></i>
                            </div>
                        </div>
                    </div>`;
            }
        });

        categoriesHtml += `
            <div class="space-y-4">
                <h2 class="text-2xl font-black text-radiant-white px-2 md:px-0">${cat.title}</h2>
                <div class="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x px-2 md:px-0">
                    ${itemsHtml}
                </div>
            </div>`;
    });

    const dots = featuredList.map((_, idx) => `
        <div class="w-2.5 h-2.5 rounded-full ${idx === featuredIndex ? 'bg-radiant-blue' : 'bg-radiant-white/30'} cursor-pointer transition-colors"></div>
    `).join('');

    const classificationPath = `./assets/Classfied_${featured.classification}.png`;

    return `
        <div id="view-catalog-radiant" class="pb-20 animate-fade-in relative bg-radiant-dark">
            <div class="relative w-full h-[85vh] flex items-center bg-radiant-dark overflow-hidden">
                <div class="absolute inset-0">
                    <img src="${featured.image}"
                        alt="Featured Content" class="w-full h-full object-cover opacity-60 transition-opacity duration-1000" />
                    <div class="absolute inset-0 bg-gradient-to-t from-radiant-dark via-radiant-dark/40 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-radiant-dark via-radiant-dark/80 sm:via-radiant-dark/40 to-transparent"></div>
                </div>
                
                <div class="relative z-10 w-full px-12 flex justify-between items-end pb-12 h-full pt-24">
                    <!-- Left Section: Info -->
                    <div class="max-w-2xl space-y-6 flex flex-col justify-end h-full pb-10">
                        <h1 class="text-5xl sm:text-7xl font-black text-radiant-white leading-tight drop-shadow-2xl uppercase tracking-tighter animate-slide-right">${featured.title}</h1>
                        
                        <div class="flex flex-col gap-2">
                            ${featured.isSeries ? `<p class="text-radiant-blue font-bold text-sm flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4"></i> ${featured.nextEpisode}</p>` : ''}
                            
                            <div class="flex items-center gap-4 text-radiant-white/90 font-bold text-sm">
                                <img src="${classificationPath}" alt="${featured.classification}" class="h-8 object-contain" />
                                <span>${featured.year}</span>
                                <span class="opacity-40">•</span>
                                <span>${featured.genre}</span>
                            </div>
                        </div>

                        <p class="text-radiant-white/80 text-lg max-w-lg line-clamp-3 font-medium drop-shadow-md">
                            ${featured.synopsis}
                        </p>

                        <div class="flex items-center gap-4 pt-4">
                            <button class="bg-radiant-blue text-white px-10 py-3.5 rounded-xl font-black flex items-center gap-3 hover:bg-[#0066cc] transition-all shadow-xl shadow-radiant-blue/30 active:scale-95">
                                <i data-lucide="play" class="lucide-filled w-5 h-5"></i> Assistir
                            </button>
                            <button class="w-12 h-12 flex items-center justify-center bg-radiant-surface/40 backdrop-blur-md text-radiant-white rounded-xl border border-radiant-white/20 hover:bg-radiant-surface/60 transition-all active:scale-95">
                                <i data-lucide="plus" class="w-6 h-6 font-bold"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Center Section: Dots -->
                    <div class="absolute left-1/2 -translate-x-1/2 bottom-12 flex gap-3">
                        ${dots}
                    </div>

                    <!-- Right Section: Audio & Navigation -->
                    <div class="flex flex-col justify-end h-full pb-10 relative">
                        <button class="w-12 h-12 flex items-center justify-center bg-radiant-surface/20 backdrop-blur-md text-radiant-white/40 rounded-full border border-radiant-white/10 hover:text-radiant-white hover:bg-radiant-surface/40 transition-all group mb-4">
                            <i data-lucide="volume-x" class="w-6 h-6 transition-transform group-hover:scale-110"></i>
                        </button>
                    </div>

                    <!-- Navigation Arrow (Right Centered) -->
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 pr-12 z-50">
                        <button onclick="window.app.nextHero()" class="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl text-white rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all shadow-2xl active:scale-95 group">
                            <i data-lucide="chevron-right" class="w-8 h-8 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-full px-12 space-y-12 mt-12 relative z-20">
                ${categoriesHtml}
            </div>
        </div>
    `;
};
