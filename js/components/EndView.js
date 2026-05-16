export const EndView = (message) => {
    return `
        <div class="min-h-screen flex items-center justify-center p-6 animate-fade-in bg-brand-bg text-center">
            <div class="max-w-xl w-full space-y-10">
                <div class="space-y-4">
                    <div class="mx-auto w-20 h-20 bg-radiant-blue/10 rounded-full flex items-center justify-center mb-6">
                        <i data-lucide="check-circle" class="text-radiant-blue w-10 h-10"></i>
                    </div>
                    <h2 class="text-4xl font-black text-brand-white">Experimento Concluído</h2>
                    <p class="text-brand-white/40 text-lg leading-relaxed">
                        ${message}
                    </p>
                </div>

                <!-- Painel de Telemetria ADS -->
                <div id="ads-computacional-painel" class="animate-slide-up" style="animation-delay: 500ms;">
                    <!-- Injetado dinamicamente via script -->
                    <div class="p-8 border border-white/5 bg-white/5 rounded-2xl animate-pulse">
                        <p class="text-brand-white/20 text-xs">Calculando telemetria do experimento...</p>
                    </div>
                </div>

                <div class="pt-10 flex flex-col items-center gap-4">
                    <button onclick="window.app.resetLab()" class="px-10 py-4 bg-brand-surface hover:bg-brand-border text-brand-white font-bold rounded-xl transition-all border border-white/5 shadow-xl">
                        Voltar ao Início
                    </button>
                    <p class="text-brand-white/20 text-[10px] uppercase tracking-[0.3em]">Radiant v1.0.0 • Simulation Lab</p>
                </div>
            </div>
        </div>
    `;
};
