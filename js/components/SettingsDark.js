export const SettingsDark = (step, checks) => {
    let content = '';

    if (step === 1) {
        content = `
            <!-- CLIQUE 1: Roach Motel -->
            <div id="dark-step-1" class="space-y-6">
                <h2 class="text-2xl font-bold text-brand-white flex items-center gap-3">
                    <i data-lucide="settings" class="text-brand-white/50"></i> Configurações de Conta
                </h2>
                <div class="bg-brand-surface rounded-lg p-5 border border-brand-border">
                    <h3 class="text-lg font-semibold text-brand-white mb-2">Plano Atual</h3>
                    <p class="text-brand-white/60 mb-4">Dark Max Premium 4K - 59,90€/mês</p>
                    <button class="w-full py-3 bg-brand-red hover:bg-[#CC0000] text-brand-white font-bold rounded transition-colors shadow-[0_0_15px_rgba(255,0,0,0.2)]">
                        Fazer Upgrade para Ultimate
                    </button>
                </div>
                <div class="bg-brand-surface rounded-lg p-5 border border-brand-border space-y-4">
                    <h3 class="text-lg font-semibold text-brand-white">Opções de Pagamento</h3>
                    <p class="text-brand-white/60 text-sm">Cartão de Crédito terminado em •••• 4321</p>
                    <button class="px-4 py-2 bg-brand-bg hover:bg-black text-brand-white text-sm font-medium rounded transition-colors border border-brand-border">
                        Atualizar Método
                    </button>
                </div>
                <div class="mt-12 pt-8 border-t border-brand-surface text-center">
                    <p class="text-brand-white/40 text-xs mb-2">Dark Max © 2026. Todos os direitos reservados.</p>
                    <button onclick="window.app.setDarkStep(2)" class="text-brand-white/20 text-[11px] hover:text-brand-white/60 mt-4 underline decoration-brand-border focus:outline-none transition-colors cursor-pointer">
                        opções de encerramento
                    </button>
                </div>
            </div>`;
    } else if (step === 2) {
        content = `
            <!-- CLIQUE 2: Confirmshaming -->
            <div id="dark-step-2" class="space-y-8 text-center">
                <div class="mx-auto w-24 h-24 bg-brand-surface rounded-full flex items-center justify-center border-4 border-brand-panel shadow-xl mb-6 text-4xl">
                    😢
                </div>
                <h2 class="text-3xl font-bold text-brand-white">Vai abandonar-nos?</h2>
                <p class="text-brand-white/60 text-lg leading-relaxed">
                    Perderá o seu histórico, as suas listas e o acesso a <strong>mais de 15.000 filmes e séries exclusivos</strong>. A sua família ficará sem entretenimento este fim de semana.
                </p>
                <div class="flex flex-col gap-4 mt-8">
                    <button onclick="window.clics_errados++; window.app.setDarkStep(1)" class="w-full py-4 bg-brand-red hover:bg-[#CC0000] text-brand-white font-bold rounded-lg text-lg shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all uppercase tracking-wider">
                        NÃO, QUERO MANTER O MEU PLANO!
                    </button>
                    <button onclick="window.app.setDarkStep(3)" class="text-brand-white/40 hover:text-brand-white/80 text-sm font-medium mt-2 transition-colors cursor-pointer">
                        Sim, não me importo com bons filmes e quero cancelar.
                    </button>
                </div>
            </div>`;
    } else if (step === 3) {
        const isOtherSelected = checks.surveyValue === 'other';
        const isSurveyValid = checks.surveyValue && (!isOtherSelected || (checks.surveyText && checks.surveyText.trim().length > 0));

        content = `
            <!-- CLIQUE 3 e 4: Survey Obrigatória -->
            <div id="dark-step-3" class="space-y-6">
                <h2 class="text-2xl font-bold text-brand-white text-center">Antes de ir...</h2>
                <div class="bg-brand-surface border border-brand-border p-4 rounded-lg flex gap-3 text-brand-white/80 text-sm leading-snug">
                    <i data-lucide="help-circle" class="shrink-0 text-brand-white/50 mt-0.5"></i>
                    <p>Conte-nos por que está nos deixando. Sua resposta é obrigatória para processarmos a rescisão do contrato.</p>
                </div>
                <div class="space-y-3 bg-brand-bg p-4 rounded-lg border border-brand-surface">
                    <label class="flex items-center gap-3 cursor-pointer group p-2 hover:bg-brand-surface rounded transition-colors">
                        <input type="radio" name="survey" value="financial" ${checks.surveyValue === 'financial' ? 'checked' : ''} onchange="window.app.updateDarkChecks('surveyValue', this.value)" class="w-4 h-4 text-brand-red bg-brand-panel border-brand-border focus:ring-brand-red accent-brand-red">
                        <span class="text-brand-white/70 text-sm group-hover:text-brand-white">Estou passando por dificuldades financeiras no momento.</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group p-2 hover:bg-brand-surface rounded transition-colors">
                        <input type="radio" name="survey" value="time" ${checks.surveyValue === 'time' ? 'checked' : ''} onchange="window.app.updateDarkChecks('surveyValue', this.value)" class="w-4 h-4 text-brand-red bg-brand-panel border-brand-border focus:ring-brand-red accent-brand-red">
                        <span class="text-brand-white/70 text-sm group-hover:text-brand-white">Não tenho tempo livre para assistir aos melhores filmes.</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group p-2 hover:bg-brand-surface rounded transition-colors">
                        <input type="radio" name="survey" value="quality" ${checks.surveyValue === 'quality' ? 'checked' : ''} onchange="window.app.updateDarkChecks('surveyValue', this.value)" class="w-4 h-4 text-brand-red bg-brand-panel border-brand-border focus:ring-brand-red accent-brand-red">
                        <span class="text-brand-white/70 text-sm group-hover:text-brand-white">Vou assinar um serviço de qualidade inferior.</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group p-2 hover:bg-brand-surface rounded transition-colors">
                        <input type="radio" name="survey" value="other" ${checks.surveyValue === 'other' ? 'checked' : ''} onchange="window.app.updateDarkChecks('surveyValue', this.value)" class="w-4 h-4 text-brand-red bg-brand-panel border-brand-border focus:ring-brand-red accent-brand-red">
                        <span class="text-brand-white/70 text-sm group-hover:text-brand-white">Outros motivos não listados.</span>
                    </label>

                    <!-- Área de texto obrigatória -->
                    ${isOtherSelected ? `
                        <div class="mt-4 px-2 animate-fade-in">
                            <label class="block text-xs font-black uppercase tracking-widest text-brand-red mb-2">Descreva detalhadamente o motivo*:</label>
                            <textarea 
                                id="dark-survey-textarea"
                                oninput="window.app.updateDarkChecks('surveyText', this.value)"
                                class="w-full bg-brand-panel border border-brand-red/50 rounded-lg p-3 text-brand-white text-sm focus:ring-1 focus:ring-brand-red outline-none min-h-[100px] placeholder-brand-white/10"
                                placeholder="Por favor, explique o motivo da sua saída para que possamos analisar..."
                            >${checks.surveyText || ''}</textarea>
                        </div>
                    ` : ''}
                </div>
                <div class="pt-4">
                    <button ${isSurveyValid ? '' : 'disabled'} onclick="window.app.setDarkStep(4)" class="w-full py-4 font-bold rounded-lg transition-all ${isSurveyValid ? 'bg-brand-surface hover:bg-brand-border text-brand-white border border-brand-border cursor-pointer shadow-lg' : 'bg-brand-surface text-brand-white/20 cursor-not-allowed border border-transparent'}">
                        Continuar e Perder Benefícios
                    </button>
                </div>
            </div>`;
    } else if (step === 4) {
        content = `
            <!-- CLIQUE 5 e 6: Furtividade / Obstrução Final -->
            <div id="dark-step-4" class="space-y-6 text-center">
                <div class="mx-auto w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mb-4">
                    <i data-lucide="shield-alert" class="text-brand-orange w-8 h-8"></i>
                </div>
                <h2 class="text-2xl font-bold text-brand-white">Último Passo</h2>
                <p class="text-brand-white/60 leading-relaxed">
                    Para confirmar o cancelamento, você deve concordar com os termos de rescisão irreversível.
                </p>
                
                <div class="bg-brand-surface p-5 rounded-lg text-left border border-brand-border/50">
                    <label class="flex items-start gap-4 cursor-pointer group">
                        <input type="checkbox" id="dark-final-check" ${checks.finalCheck ? 'checked' : ''} onchange="window.app.updateDarkChecks('finalCheck', this.checked)" class="mt-1 w-6 h-6 rounded border-brand-white/20 bg-brand-bg text-brand-red focus:ring-brand-red accent-brand-red cursor-pointer" />
                        <span class="text-brand-white/70 text-sm group-hover:text-brand-white transition-colors leading-relaxed">
                            Compreendo que perderei todos os meus benefícios promocionais e histórico de visualização <strong class="text-brand-white font-bold underline decoration-brand-red">permanentemente</strong>.
                        </span>
                    </label>
                </div>

                </div>

                <div class="pt-6 space-y-4 flex flex-col items-center">
                    <button onclick="window.clics_errados++; window.app.finishLab(true);" class="w-full py-4 bg-brand-red hover:bg-[#CC0000] text-brand-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2 shadow-xl uppercase tracking-wider">
                        <i data-lucide="lock" class="w-5 h-5"></i> Manter Minha Assinatura Ativa
                    </button>
                    
                    <button ${checks.finalCheck ? '' : 'disabled'} onclick="window.app.finishLab()" 
                        class="w-full py-4 font-bold uppercase tracking-wider transition-all rounded-lg border border-transparent ${checks.finalCheck ? 'text-brand-white/20 hover:text-brand-white/60 cursor-pointer bg-transparent' : 'text-brand-white/5 opacity-30 cursor-not-allowed pointer-events-none'}">
                        finalizar cancelamento
                    </button>
                </div>
            </div>`;
    }

    return `
        <div id="view-settings-dark" class="max-w-4xl mx-auto p-4 py-10 h-screen overflow-y-auto">
            <div class="max-w-2xl mx-auto bg-brand-panel rounded-xl border border-brand-surface overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] mt-8 mb-20">
                <div class="p-6 sm:p-10 relative">
                    ${content}
                </div>
            </div>
        </div>
    `;
};
