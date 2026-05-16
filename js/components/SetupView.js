export const SetupView = () => {
    return `
        <div class="min-h-screen flex items-center justify-center p-6 animate-fade-in bg-brand-bg">
            <div class="max-w-xl w-full text-center space-y-12">
                <div class="space-y-4">
                    <h1 class="text-5xl font-black text-brand-white tracking-tighter">
                        Laboratório de <span class="text-radiant-blue">UX</span>
                    </h1>
                    <p class="text-brand-white/40 text-lg font-medium">
                        Ambiente de simulação para testes de padrões de interface e fluxos de usuário.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-6">
                    <!-- Apenas Radiant Plus visível -->
                    <div onclick="window.app.prepareTest('radiant')" 
                         class="group relative bg-[#23293b] rounded-2xl p-8 border border-white/5 hover:border-radiant-blue transition-all cursor-pointer shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-radiant-blue text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                            Recomendado
                        </div>
                        <div class="mb-6 mx-auto w-20 h-20 bg-radiant-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i data-lucide="sun" class="text-radiant-blue w-10 h-10"></i>
                        </div>
                        <h3 class="text-2xl font-black text-brand-white mb-2">Radiant Plus</h3>
                        <p class="text-brand-white/40 text-sm leading-relaxed">
                            Simulação de fluxo transparente, honesto e centrado na autonomia do usuário.
                        </p>
                        <div class="mt-8 flex items-center justify-center gap-2 text-radiant-blue font-bold text-sm">
                            Iniciar Experimento <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </div>
                    </div>
                </div>

                <div class="pt-8 opacity-20 hover:opacity-40 transition-opacity">
                    <p class="text-xs font-medium uppercase tracking-[0.3em]">Radiant v1.0.0 • Simulation Lab</p>
                </div>
            </div>
        </div>
    `;
};
