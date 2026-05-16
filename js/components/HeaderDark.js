export const HeaderDark = (isMenuOpen, view = 'catalog') => {
    const profileImg = "https://images.unsplash.com/vector-1750956309367-75e0dc5d50d3?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const isSettings = view === 'settings';

    return `
        <header id="header-dark" class="bg-transparent border-b border-transparent p-4 fixed top-0 left-0 w-full z-50">
            <div class="w-full px-12 flex justify-between items-center">
                <div class="flex items-center gap-10">
                    <!-- Logo (Volta para o Início) -->
                    <div class="text-brand-red font-black text-2xl cursor-pointer hover:opacity-80 transition-all tracking-tight" style="font-family: 'Afacad Flux', sans-serif;" onclick="window.app.goToCatalog()">
                        DARK MAX
                    </div>

                    ${!isSettings ? `
                    <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide text-brand-white/60">
                        <span class="hover:text-brand-white cursor-pointer transition-colors text-radiant-white" onclick="window.app.goToCatalog()">Início</span>
                        <span class="hover:text-brand-white cursor-pointer transition-colors">Séries</span>
                        <span class="hover:text-brand-white cursor-pointer transition-colors">Filmes</span>
                        <span class="hover:text-brand-white cursor-pointer transition-colors">Esportes</span>
                        <span class="hover:text-brand-white cursor-pointer transition-colors">Originais</span>
                    </nav>
                    ` : ''}
                </div>

                <div class="flex items-center gap-5 text-brand-white/80">
                    ${!isSettings ? `
                    <i data-lucide="search" class="w-5 h-5 cursor-pointer hover:text-brand-white transition-colors"></i>
                    <i data-lucide="bookmark" class="w-5 h-5 cursor-pointer hover:text-brand-white transition-colors"></i>
                    ` : ''}

                    <div class="relative ml-2">
                        <!-- Gatilho de Perfil com Chevron -->
                        <div onclick="window.app.toggleDarkProfileMenu()" class="flex items-center gap-2 cursor-pointer group select-none">
                            <div class="w-10 h-10 rounded-full overflow-hidden border border-brand-border group-hover:border-brand-white/50 transition-all">
                                <img src="${profileImg}" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <i data-lucide="${isMenuOpen ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4 text-brand-white/40 group-hover:text-brand-white transition-colors"></i>
                        </div>

                        <!-- Dropdown Dark (96% Opacity, Extreme Blur) -->
                        <div id="dark-profile-dropdown" class="${isMenuOpen ? '' : 'hidden'} absolute right-0 mt-3 w-[320px] border border-white/5 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 py-3 overflow-hidden"
                             style="background-color: rgba(10, 10, 10, 0.98); backdrop-filter: blur(80px); -webkit-backdrop-filter: blur(80px);">
                            
                            <!-- Outros Perfis -->
                            <div class="space-y-0.5">
                                <div class="flex items-center gap-4 px-6 py-4 hover:bg-white/5 cursor-pointer opacity-50 hover:opacity-100 transition-all">
                                    <div class="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/40 font-black text-xs shrink-0">P2</div>
                                    <span class="text-sm text-brand-white font-bold">Profile 2</span>
                                </div>
                                <div class="flex items-center gap-4 px-6 py-4 hover:bg-white/5 cursor-pointer opacity-50 hover:opacity-100 transition-all">
                                    <div class="w-10 h-10 rounded bg-green-950 flex items-center justify-center text-white/40 font-black text-xs shrink-0">K</div>
                                    <span class="text-sm text-brand-white font-bold">Kids</span>
                                </div>
                            </div>

                            <!-- Divisor -->
                            <div class="w-full border-t border-white/10 my-2"></div>

                            <!-- Opções com Ícones -->
                            <ul class="text-sm text-brand-white/80 py-1">
                                <li>
                                    <a href="#" class="flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest text-[11px]">
                                        <i data-lucide="settings" class="w-4 h-4 text-brand-white/40"></i> Gerenciar Perfis
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest text-[11px]">
                                        <i data-lucide="move" class="w-4 h-4 text-brand-white/40"></i> Transferir Perfil
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onclick="window.app.goToSettings(); window.app.toggleDarkProfileMenu();" class="flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest text-[11px]">
                                        <i data-lucide="user" class="w-4 h-4 text-brand-white/40"></i> Conta
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest text-[11px]">
                                        <i data-lucide="help-circle" class="w-4 h-4 text-brand-white/40"></i> Central de Ajuda
                                    </a>
                                </li>
                            </ul>

                            <!-- Divisor -->
                            <div class="w-full border-t border-white/10 my-2"></div>

                            <!-- Sair -->
                            <div class="pt-1">
                                <button onclick="window.app.resetLab()" class="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest text-[11px] text-brand-white/80 bg-transparent border-none cursor-pointer text-left">
                                    <i data-lucide="log-out" class="w-4 h-4 text-brand-white/40"></i> Sair da Dark Max
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
};
