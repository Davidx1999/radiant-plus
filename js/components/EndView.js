export const EndView = (message, pattern, abandonou) => {
    const isRadiant = pattern === 'radiant';
    const accentColor = isRadiant ? "text-radiant-blue" : "text-brand-red";
    const accentBg = isRadiant ? "bg-radiant-blue" : "bg-brand-red";
    const btnColor = isRadiant ? "bg-[#23293b]" : "bg-brand-surface";

    return `
        <div class="min-h-screen flex flex-col items-center justify-start p-6 animate-fade-in bg-brand-bg text-center overflow-y-auto">
            <div class="max-w-2xl w-full space-y-8 py-12">
                <div class="space-y-4">
                    <div class="mx-auto w-20 h-20 ${isRadiant ? 'bg-radiant-blue/10' : 'bg-brand-red/10'} rounded-full flex items-center justify-center mb-6">
                        <i data-lucide="check-circle" class="${accentColor} w-10 h-10"></i>
                    </div>
                    <h2 class="text-4xl font-black text-brand-white">Experimento Concluído</h2>
                    <p class="text-brand-white/40 text-lg leading-relaxed">
                        ${message}
                    </p>
                </div>

                <!-- FORMULÁRIO DE AVALIAÇÃO (MOVIDO PARA CÁ) -->
                <div id="survey-end-container" class="ignorar-clique mt-8 mb-6 p-8 bg-black/40 border border-white/10 rounded-2xl text-left animate-slide-up shadow-2xl">
                    <h4 class="font-bold text-white mb-6 flex items-center gap-2 text-xl">
                        <i data-lucide="clipboard-check" class="w-6 h-6 ${accentColor}"></i> Avaliação do Fluxo
                    </h4>
                    
                    <div class="mb-10">
                        <label class="block text-base text-white/90 mb-6 font-medium">1. "Foi muito cansativo utilizar esta função de cancelamento de assinatura."</label>
                        <div class="flex flex-col gap-4">
                            ${[
            'Discordo Totalmente',
            'Discordo',
            'Neutro (Sem opinião formada)',
            'Concordo',
            'Concordo Totalmente'
        ].map(label => `
                                <label class="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                    <input type="radio" name="p_cansativo" value="${label}" onchange="window.atualizarPesquisaFinal('cansativo', this.value)" class="w-6 h-6 ${isRadiant ? 'accent-radiant-blue' : 'accent-brand-red'} cursor-pointer">
                                    <span class="text-sm text-white/70 group-hover:text-white">${label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="mb-10 border-t border-white/5 pt-8">
                        <label class="block text-base text-white/90 mb-6 font-medium">2. "Eu me senti muito seguro usando esta função de cancelamento de assinatura."</label>
                        <div class="flex flex-col gap-4">
                            ${[
            'Discordo Totalmente',
            'Discordo',
            'Neutro (Sem opinião formada)',
            'Concordo',
            'Concordo Totalmente'
        ].map(label => `
                                <label class="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                    <input type="radio" name="p_seguro" value="${label}" onchange="window.atualizarPesquisaFinal('seguro', this.value)" class="w-6 h-6 ${isRadiant ? 'accent-radiant-blue' : 'accent-brand-red'} cursor-pointer">
                                    <span class="text-sm text-white/70 group-hover:text-white">${label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="mb-10 border-t border-white/5 pt-8">
                        <label class="block text-base text-white/90 mb-6 font-medium">3. Voltaria a utilizar o serviço novamente?</label>
                        <div class="flex flex-col gap-4">
                            ${['Sim', 'Não', 'Talvez'].map(v => `
                                <label class="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                    <input type="radio" name="p_voltaria" value="${v}" onchange="window.atualizarPesquisaFinal('voltaria', this.value)" class="w-5 h-5 ${isRadiant ? 'accent-radiant-blue' : 'accent-brand-red'} cursor-pointer">
                                    <span class="text-sm text-white/70 group-hover:text-white">${v}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    ${(!isRadiant && abandonou) ? `
                    <div class="border-t border-white/5 pt-8 animate-fade-in">
                        <label class="block text-base text-white/90 mb-6 font-medium">4. Manter a assinatura foi uma escolha proposital?</label>
                        <div class="flex flex-col gap-4">
                            <label class="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                <input type="radio" name="p_proposital" value="Sim" onchange="window.atualizarPesquisaFinal('feedback', this.value)" class="w-5 h-5 accent-brand-red cursor-pointer">
                                <span class="text-sm text-white/70 group-hover:text-white">Sim</span>
                            </label>
                            <label class="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                <input type="radio" name="p_proposital" value="Não" onchange="window.atualizarPesquisaFinal('feedback', this.value)" class="w-5 h-5 accent-brand-red cursor-pointer">
                                <span class="text-sm text-white/70 group-hover:text-white">Não</span>
                            </label>
                        </div>
                    </div>
                    ` : ''}

                    <div class="mt-12 pt-4 border-t border-white/5">
                        <p id="validation-error" class="text-brand-red text-sm mb-4 hidden font-bold">⚠️ Por favor, responda todas as perguntas da avaliação antes de enviar.</p>
                        <button id="btn-finish-telemetry" onclick="validarEEnviar(${abandonou}, ${!isRadiant})" class="w-full py-5 ${accentBg} hover:opacity-90 text-white font-black rounded-xl transition-all shadow-2xl uppercase tracking-widest text-lg">
                            Confirmar e Enviar Telemetria
                        </button>
                    </div>
                </div>

                <!-- Painel de Telemetria ADS (Oculto até o envio) -->
                <div id="ads-computacional-painel" class="hidden animate-slide-up">
                    <div class="p-8 border border-white/5 bg-white/5 rounded-2xl">
                        <p class="text-brand-white/20 text-xs text-center">Enviando dados...</p>
                    </div>
                </div>

                <div id="final-reset-button" class="ignorar-clique hidden pt-4 pb-12 flex flex-col items-center gap-4">
                    <button onclick="window.app.resetLab()" class="px-10 py-4 ${btnColor} hover:opacity-80 text-brand-white font-bold rounded-xl transition-all border border-white/5 shadow-xl">
                        Voltar ao Início
                    </button>
                    <p class="text-brand-white/20 text-[10px] uppercase tracking-[0.3em]">Radiant Plus v1.0.0 • Simulation Lab</p>
                </div>
            </div>
        </div>
    `;
};
