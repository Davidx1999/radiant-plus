export const SetupView = () => {
    return `
        <div id="view-setup" class="w-full px-12 p-4 sm:p-6 py-10 animate-zoom-in">
            <div class="space-y-8">
                <div class="text-center space-y-4 max-w-2xl mx-auto">
                    <div class="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-4">
                        <i data-lucide="flask-conical" class="w-8 h-8 text-brand-white/80"></i>
                    </div>
                    <h1 class="text-3xl md:text-5xl font-bold text-brand-white tracking-tight">Painel do Pesquisador</h1>
                    <p class="text-brand-white/60 text-lg">
                        Selecione a variante do teste A/B que será aplicada ao participante agora. O participante verá apenas a tela de instruções da variante escolhida.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-12">
                    <div onclick="window.app.prepareTest('radiant')"
                        class="bg-brand-panel border border-radiant-blue/30 rounded-2xl p-6 cursor-pointer hover:border-radiant-blue hover:shadow-[0_0_30px_rgba(0,127,255,0.15)] transition-all group flex flex-col">
                        <div class="w-12 h-12 bg-radiant-lightblue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i data-lucide="sparkles" class="text-radiant-blue"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-radiant-white mb-2">Variante A: Radiant Plus</h2>
                        <h3 class="text-radiant-blue text-sm font-semibold mb-4 uppercase tracking-wider">Radiant Pattern (3 cliques)</h3>
                        <p class="text-radiant-white/60 mb-6">Inicia o fluxo ético focado em transparência e empoderamento do usuário. (Sem atritos de UI).</p>
                        <button class="mt-auto w-full py-3 bg-radiant-surface text-radiant-white rounded-lg font-medium group-hover:bg-radiant-blue transition-colors border border-radiant-blue/20">
                            Preparar Variante A
                        </button>
                    </div>

                    <div onclick="window.app.prepareTest('dark')"
                        class="bg-brand-panel border border-brand-red/30 rounded-2xl p-6 cursor-pointer hover:border-brand-red hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all group flex flex-col">
                        <div class="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <i data-lucide="alert-triangle" class="text-brand-red"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-brand-white mb-2">Variante B: Dark Max</h2>
                        <h3 class="text-brand-red text-sm font-semibold mb-4 uppercase tracking-wider">Roach Motel (6 cliques)</h3>
                        <p class="text-brand-white/60 mb-6">Inicia o fluxo obstrutivo com confirmshaming, furtividade e retenção forçada. (Menu com clique extra).</p>
                        <button class="mt-auto w-full py-3 bg-brand-surface text-brand-white rounded-lg font-medium group-hover:bg-brand-red transition-colors">
                            Preparar Variante B
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
