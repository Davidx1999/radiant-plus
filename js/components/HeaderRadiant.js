export const HeaderRadiant = (view = 'catalog') => {
    const profileImg = "https://images.unsplash.com/vector-1750956309367-75e0dc5d50d3?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const isSettings = view === 'settings';

    return `
        <header id="header-radiant" class="bg-transparent border-b border-transparent p-4 fixed top-0 left-0 w-full z-50">
            <div class="w-full px-12 flex justify-between items-center">
                <div class="flex items-center gap-6">
                    <!-- Logo (Volta para o Início) -->
                    <div class="cursor-pointer hover:opacity-80 transition-all" onclick="window.app.goToCatalog()">
                        <img src="./assets/radiant-plus.png" onerror="if(!this.src.includes('/public/')) this.src='./public/assets/radiant-plus.png';" alt="RADIANT PLUS" class="h-8 object-contain" />
                    </div>

                    ${!isSettings ? `
                    <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide text-radiant-white/60">
                        <span class="hover:text-radiant-white cursor-pointer transition-colors text-radiant-white" onclick="window.app.goToCatalog()">Início</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Séries</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Filmes</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Esportes</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Originais</span>
                    </nav>
                    ` : ''}
                </div>

                <div class="flex items-center gap-5 text-radiant-white/80">
                    ${!isSettings ? `
                    <i data-lucide="search" class="w-5 h-5 cursor-pointer hover:text-radiant-white transition-colors"></i>
                    <i data-lucide="bookmark" class="w-5 h-5 cursor-pointer hover:text-radiant-white transition-colors"></i>
                    ` : ''}

                    <div class="relative group ml-2 py-2">
                        <!-- Gatilho de Perfil com Chevron Hover -->
                        <div class="flex items-center gap-2 cursor-pointer select-none">
                            <div class="w-10 h-10 rounded-full overflow-hidden border border-radiant-lightblue/20 group-hover:border-radiant-blue transition-all shadow-[0_0_15px_rgba(0,127,255,0.1)]">
                                <img src="${profileImg}" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="relative w-4 h-4">
                                <i data-lucide="chevron-down" class="absolute inset-0 w-4 h-4 text-radiant-white/40 group-hover:opacity-0 transition-all duration-300"></i>
                                <i data-lucide="chevron-up" class="absolute inset-0 w-4 h-4 text-radiant-white opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                            </div>
                        </div>

                        <!-- Dropdown Radiant -->
                        <div class="absolute right-0 top-[100%] mt-1 w-[320px] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 pb-6 overflow-hidden" 
                             style="background-color: rgba(10, 10, 10, 0.98); backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px);">
                            
                            <!-- Perfis -->
                            <div class="space-y-0.5">
                                <div class="flex items-center gap-4 px-6 py-5 bg-black border-b border-white/5 cursor-pointer hover:bg-black/80 transition-colors">
                                    <div class="w-12 h-12 rounded-lg overflow-hidden bg-radiant-blue shrink-0 shadow-2xl">
                                        <img src="${profileImg}" class="w-full h-full object-cover" />
                                    </div>
                                    <span class="text-base text-radiant-white font-black tracking-tight">Participante Lab</span>
                                </div>
                                
                                <div class="flex items-center gap-4 px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors opacity-60 hover:opacity-100">
                                    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0 uppercase">P2</div>
                                    <span class="text-sm text-radiant-white font-medium">Profile 2</span>
                                </div>
                                <div class="flex items-center gap-4 px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors opacity-60 hover:opacity-100">
                                    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">K</div>
                                    <span class="text-sm text-radiant-white font-medium">Kids</span>
                                </div>
                            </div>

                            <div class="w-full border-t border-white/10 my-2"></div>

                            <ul class="text-sm text-radiant-white/80 py-0">
                                <li><a href="#" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors font-medium">Gerencie os perfis</a></li>
                                <li><a href="#" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors">Configurações</a></li>
                                <li><a href="#" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors">Conta</a></li>
                                <li><a href="#" onclick="window.app.goToSettings(); return false;" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors">Assinatura</a></li>
                                <li><a href="#" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors">Privacidade e Informações Legais</a></li>
                                <li><a href="#" class="block px-6 py-2.5 hover:bg-white/5 hover:text-radiant-white transition-colors">Ajuda</a></li>
                            </ul>

                            <div class="w-full border-t border-white/10 my-2"></div>

                            <div class="px-6 pt-1">
                                <button onclick="window.app.resetLab()" class="text-sm text-radiant-white/80 hover:text-radiant-white transition-colors inline-flex items-center gap-2 font-normal cursor-pointer bg-transparent border-none p-0 outline-none">
                                    Sair da Radiant Plus <i data-lucide="log-out" class="w-4 h-4 opacity-50"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
};
