export const Header = () => {
    return `
        <header class="bg-brand-bg/95 backdrop-blur-md border-b border-brand-surface p-4 sticky top-0 z-50 transition-colors">
            <div class="max-w-7xl mx-auto flex justify-between items-center px-2">
                <div class="flex items-center gap-10">
                    <div class="flex items-center gap-2 text-radiant-blue font-bold text-2xl cursor-pointer hover:opacity-80" onclick="window.app.goTo('dashboard')">
                        <i data-lucide="sparkles" class="lucide-filled"></i>
                        <span class="text-radiant-white">Radiant Evaluation</span>
                    </div>
                    <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide text-radiant-white/60">
                        <span class="hover:text-radiant-white cursor-pointer transition-colors" onclick="window.app.goTo('dashboard')">Dashboard</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Relatórios</span>
                        <span class="hover:text-radiant-white cursor-pointer transition-colors">Configurações</span>
                    </nav>
                </div>
                <div class="flex items-center gap-5 text-radiant-white/80">
                    <i data-lucide="bell" class="w-5 h-5 cursor-pointer hover:text-radiant-white transition-colors"></i>
                    <div class="relative group ml-2 py-2">
                        <div class="w-10 h-10 bg-radiant-surface border border-radiant-lightblue/20 rounded-full flex items-center justify-center cursor-pointer group-hover:border-radiant-blue transition-all">
                            <i data-lucide="user" class="w-5 h-5 text-radiant-blue"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
};
