export const SettingsRadiant = (step) => {
    let stepContent = '';

    if (step === 1) {
        stepContent = `
            <div id="radiant-step-1" class="w-full max-w-3xl mx-auto animate-fade-in pt-4">
                <!-- Títulos da Página -->
                <div class="text-center mb-6">
                    <h1 class="text-5xl font-black text-radiant-white mb-2 tracking-tight">Assinatura</h1>
                    <p class="text-radiant-white/60 text-lg">Cobrança por meio de: Cartão de Crédito final 4321</p>
                </div>

                <!-- O Cartão de Plano -->
                <div class="bg-[#23293b] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <div class="bg-white/10 px-8 py-3">
                        <span class="text-[10px] font-black uppercase tracking-widest text-radiant-white/90">Plano atual</span>
                    </div>

                    <div class="px-8 py-8">
                        <h2 class="text-6xl font-black text-radiant-white mb-3 tracking-tighter">Radiant Plus</h2>
                        <p class="text-radiant-white/70 text-lg leading-relaxed max-w-2xl">
                            Gerencie sua assinatura, forma de pagamento e acompanhe sua próxima cobrança (15 de Outubro).
                        </p>
                    </div>

                    <div class="border-t border-white/5">
                        <div class="group cursor-pointer hover:bg-white/5 transition-all border-b border-white/5">
                            <div class="px-8 py-5 flex justify-between items-center">
                                <span class="text-radiant-white font-bold text-lg">Alterar Plano</span>
                                <i data-lucide="chevron-right" class="w-6 h-6 text-radiant-white/30 group-hover:text-radiant-white transition-colors"></i>
                            </div>
                        </div>
                        <div onclick="window.app.setRadiantStep(2)" class="group cursor-pointer hover:bg-white/5 transition-all">
                            <div class="px-8 py-5 flex justify-between items-center">
                                <span class="text-radiant-white font-bold text-lg">Cancelar Assinatura</span>
                                <i data-lucide="chevron-right" class="w-6 h-6 text-radiant-white/30 group-hover:text-radiant-white transition-colors"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (step === 2) {
        stepContent = `
            <div id="radiant-step-2" class="w-full max-w-2xl mx-auto animate-slide-up text-center pt-4">
                <div class="mb-6">
                    <div class="w-16 h-16 bg-radiant-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="info" class="text-radiant-blue w-8 h-8"></i>
                    </div>
                    <h2 class="text-4xl font-black text-radiant-white mb-2">Deseja mesmo cancelar?</h2>
                    <p class="text-radiant-white/70 text-lg leading-relaxed">
                        O seu acesso continuará ativo até <strong>15 de Outubro</strong>. Após essa data, não faremos novas cobranças.
                    </p>
                </div>

                <div class="bg-[#23293b] rounded-xl p-8 border border-white/5 text-left mb-8 shadow-xl">
                    <h4 class="font-black text-radiant-white mb-4 text-xl tracking-tight">O que acontece a seguir:</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-4">
                            <div class="mt-1 w-6 h-6 rounded-full bg-radiant-blue/20 flex items-center justify-center shrink-0">
                                <i data-lucide="check" class="w-4 h-4 text-radiant-blue"></i>
                            </div>
                            <span class="text-radiant-white/80 text-lg">Sem taxas de cancelamento surpresa ou custos ocultos.</span>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="mt-1 w-6 h-6 rounded-full bg-radiant-blue/20 flex items-center justify-center shrink-0">
                                <i data-lucide="check" class="w-4 h-4 text-radiant-blue"></i>
                            </div>
                            <span class="text-radiant-white/80 text-lg">Seus perfis e histórico ficam guardados por 10 meses.</span>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="window.app.finishLab(true)" class="px-8 py-4 border border-white/20 text-radiant-white hover:bg-white/5 font-bold rounded-xl transition-all text-lg">
                        Manter Assinatura
                    </button>
                    <button onclick="window.app.setRadiantStep(3)" class="px-8 py-4 bg-radiant-blue hover:bg-radiant-blue/80 text-white font-bold rounded-xl transition-all shadow-lg shadow-radiant-blue/20 text-lg">
                        Confirmar Cancelamento
                    </button>
                </div>
            </div>
        `;
    } else if (step === 3) {
        stepContent = `
            <div id="radiant-step-3" class="w-full max-w-2xl mx-auto text-center pt-2 animate-zoom-in">
                <div class="mx-auto w-20 h-20 bg-radiant-blue/20 rounded-full flex items-center justify-center mb-6 shadow-2xl border border-radiant-blue/30">
                    <i data-lucide="check" class="text-radiant-blue w-10 h-10"></i>
                </div>
                <h2 class="text-5xl font-black text-radiant-white tracking-tight mb-4">Assinatura Cancelada</h2>
                <p class="text-radiant-white/70 text-lg max-w-md mx-auto leading-relaxed font-medium mb-8">
                    Tudo pronto! Você terá acesso até o fim do ciclo. Sentiremos sua falta!
                </p>

                <!-- Pesquisa Opcional -->
                <div class="bg-[#23293b] rounded-xl p-6 border border-white/5 text-left mb-8 shadow-xl animate-fade-in">
                    <h4 class="font-black text-radiant-white mb-3 text-lg">Antes de ir, poderia nos contar o motivo? (Opcional)</h4>
                    
                    <div class="space-y-3">
                        <select class="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-radiant-white text-sm focus:ring-1 focus:ring-radiant-blue outline-none cursor-pointer">
                            <option value="">Selecione uma opção (Se desejar)</option>
                            <option value="price">O preço está alto demais</option>
                            <option value="content">Não encontrei o que queria assistir</option>
                            <option value="technical">Problemas técnicos com o app</option>
                            <option value="other">Outros motivos</option>
                        </select>
                        <textarea class="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-radiant-white text-sm focus:ring-1 focus:ring-radiant-blue outline-none min-h-[50px] placeholder-radiant-white/20" placeholder="Algo mais que gostaria de compartilhar?"></textarea>
                    </div>
                </div>

                </div>

                <button onclick="window.app.finishLab()" class="px-12 py-4 bg-[#23293b] hover:bg-[#2a3147] text-radiant-white font-black rounded-xl transition-all shadow-xl border border-white/10 text-lg uppercase tracking-wider">
                    Finalizar Simulação
                </button>
            </div>
        `;
    }

    return `
        <div id="view-settings-radiant" class="h-screen flex flex-col pt-24 pb-4 relative px-6 overflow-y-auto">
            <!-- Conteúdo Principal Alinhado ao Topo (próximo ao header) -->
            <div class="flex-grow flex flex-col items-center justify-start mt-4 mb-20">
                ${stepContent}
            </div>

            <!-- Footer Simulado -->
            <div class="max-w-6xl mx-auto w-full mt-auto py-12 border-t border-white/5">
                <footer class="flex flex-col md:flex-row justify-between items-center gap-8 text-radiant-white/40 text-xs">
                    <div class="flex items-center gap-8">
                        <img src="assets/radiant plus.png" alt="Radiant Plus" class="h-4 opacity-30 grayscale">
                        <p>© 2026 Radiant Plus. Todos os direitos reservados.</p>
                    </div>
                    <div class="flex gap-6 font-medium">
                        <a href="#" class="hover:text-radiant-white transition-colors">Ajuda</a>
                        <a href="#" class="hover:text-radiant-white transition-colors">Privacidade</a>
                        <a href="#" class="hover:text-radiant-white transition-colors">Termos</a>
                    </div>
                </footer>
            </div>

            <!-- Botão Flutuante de Ajuda -->
            <div class="fixed bottom-6 right-6 z-50">
                <button class="w-12 h-12 bg-radiant-blue text-white rounded-full shadow-2xl shadow-radiant-blue/40 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
                    <i data-lucide="message-circle" class="w-6 h-6"></i>
                    <span class="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                        Precisa de ajuda?
                    </span>
                </button>
            </div>
        </div>
    `;
};
