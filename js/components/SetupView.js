export const SetupView = () => {
    return `
        <div class="min-h-screen flex items-center justify-center p-6 animate-fade-in bg-brand-bg">
            <div class="max-w-4xl w-full text-center space-y-12">
                <div class="space-y-4">
                    <h1 class="text-6xl font-black text-brand-white tracking-tighter">
                        Laboratório de <span class="text-radiant-blue">UX</span>
                    </h1>
                    <p class="text-brand-white/40 text-lg font-medium">
                        Selecione a variante do experimento para iniciar a simulação de fluxo.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Card Radiant Plus -->
                    <div onclick="window.app.prepareTest('radiant')" 
                         class="group relative bg-[#1a1f2e] rounded-3xl p-10 border border-white/5 hover:border-radiant-blue transition-all cursor-pointer shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                        <div class="mb-8 mx-auto w-20 h-20 bg-radiant-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i data-lucide="sun" class="text-radiant-blue w-10 h-10"></i>
                        </div>
                        <h3 class="text-3xl font-black text-brand-white mb-3 tracking-tight">Radiant Plus</h3>
                        <p class="text-brand-white/40 text-sm leading-relaxed mb-8">
                            Fluxo transparente, honesto e focado na autonomia do usuário. Padrão ético de interface.
                        </p>
                        <div class="flex items-center justify-center gap-2 text-radiant-blue font-bold text-sm">
                            Explorar Variante A <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </div>
                    </div>

                    <!-- Card Dark Max (Roach Motel) -->
                    <div onclick="window.app.prepareTest('dark')" 
                         class="group relative bg-[#141414] rounded-3xl p-10 border border-white/5 hover:border-brand-red transition-all cursor-pointer shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                        <div class="mb-8 mx-auto w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i data-lucide="moon" class="text-brand-red w-10 h-10"></i>
                        </div>
                        <h3 class="text-3xl font-black text-brand-white mb-3 tracking-tight">Dark Max</h3>
                        <p class="text-brand-white/40 text-sm leading-relaxed mb-8">
                            Fluxo com padrões obscuros (Roach Motel). Focado em retenção forçada e obstrução.
                        </p>
                        <div class="flex items-center justify-center gap-2 text-brand-red font-bold text-sm">
                            Explorar Variante B <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                </div>

                <div class="pt-12 opacity-20 hover:opacity-40 transition-opacity">
                    <p class="text-xs font-medium uppercase tracking-[0.3em]">Radiant v1.0.0 • ADS Research Lab</p>
                </div>
            </div>
        </div>
    `;
};
