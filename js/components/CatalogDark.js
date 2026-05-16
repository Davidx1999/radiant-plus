export const CatalogDark = (categories, fictionalTitles, featuredList, featuredIndex = 0) => {
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
                        <span class="absolute -left-2 sm:-left-4 bottom-2 text-7xl sm:text-9xl font-black text-stroke-brand transition-colors duration-300 z-10 leading-none">${i + 1}</span>
                        <div class="w-[80%] h-full rounded-md overflow-hidden relative shadow-lg border border-transparent group-hover:border-brand-white/30 transition-all duration-300 z-0">
                            <img src="${imgUrl}" alt="${movieTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <i data-lucide="play-circle" class="w-12 h-12 text-white drop-shadow-lg"></i>
                            </div>
                        </div>
                    </div>`;
            } else {
                const progressBar = cat.type === 'progress'
                    ? `<div class="absolute bottom-0 left-0 w-full h-1.5 bg-brand-border/50"><div class="h-full bg-brand-red" style="width: ${Math.floor(Math.random() * 80 + 10)}%"></div></div>`
                    : '';

                itemsHtml += `
                    <div class="shrink-0 w-64 md:w-80 aspect-video rounded-lg overflow-hidden group cursor-pointer snap-start relative border transition-all duration-300 bg-brand-surface border-transparent hover:border-brand-white/30 shadow-lg">
                        <img src="${imgUrl}" alt="Thumbnail de ${movieTitle}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        ${progressBar}
                        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div class="flex justify-between items-end w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <span class="text-brand-white font-bold text-sm truncate block mb-1">${movieTitle}</span>
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
                <h2 class="text-xl font-bold text-brand-white px-2 md:px-0">${cat.title}</h2>
                <div class="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x px-2 md:px-0">
                    ${itemsHtml}
                </div>
            </div>`;
    });

    return `
        <div id="view-catalog-dark" class="pb-20 animate-fade-in relative bg-brand-bg">
            <div class="relative w-full h-[85vh] flex items-center bg-brand-panel overflow-hidden pt-24">
                <div class="absolute inset-0">
                    <img src="${featured.image}"
                        alt="Featured Movie" class="w-full h-full object-cover opacity-60 transition-opacity duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 sm:via-brand-bg/50 to-transparent"></div>
                </div>

                <!-- Navigation Arrow (Right Centered) -->
                <div class="absolute right-0 top-1/2 -translate-y-1/2 pr-12 z-50">
                    <button onclick="window.app.nextHero()" class="w-14 h-24 flex items-center justify-center bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all group border-l border-t border-b border-white/10 rounded-l-lg">
                        <i data-lucide="chevron-right" class="w-10 h-10 group-hover:scale-125 transition-transform"></i>
                    </button>
                </div>

                <div class="relative z-10 w-full px-12 flex justify-between items-end pb-12 h-full pt-24">
                    <div class="max-w-2xl space-y-6">
                        <span class="text-brand-white/80 font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                            Em Destaque Hoje
                        </span>
                        <h1 class="text-5xl sm:text-7xl font-bold text-brand-white leading-tight drop-shadow-lg font-serif tracking-tight">${featured.title}</h1>
                        <div class="flex items-center gap-3 text-brand-white/80 font-medium text-sm mt-2">
                            <div class="bg-[#e67e22] text-white font-bold px-1.5 py-0.5 rounded text-xs">${featured.classification}</div>
                            <span>${featured.year}</span>
                            <span>•</span>
                            <span>${featured.genre}</span>
                        </div>
                        <p class="text-brand-white/80 text-lg max-w-lg line-clamp-3 text-shadow mt-4">
                            ${featured.synopsis}
                        </p>
                        <div class="flex gap-4 pt-4">
                            <button class="bg-brand-white text-black px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-brand-white/80 transition-all shadow-lg">
                                <i data-lucide="play" class="lucide-filled w-5 h-5"></i> Assistir
                            </button>
                            <button class="bg-brand-surface/60 backdrop-blur-md text-brand-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-brand-surface transition-colors border border-brand-border/50">
                                <i data-lucide="info" class="w-5 h-5"></i> Mais Informações
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full px-12 space-y-12 mt-12 relative z-20">
                ${categoriesHtml}
            </div>
        </div>
    `;
};
