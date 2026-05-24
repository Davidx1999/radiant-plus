export const EndView = (message, pattern, abandonou) => {
    return `
        <div class="flex-grow flex items-center justify-center p-2 sm:p-4 w-full max-w-4xl mx-auto animate-fade-in text-gray-800">
            <div class="w-full bg-white shadow-xl rounded-2xl overflow-hidden relative border border-gray-100">
                
                <!-- PROGRESS BAR -->
                <div id="progress-container" class="hidden h-1.5 w-full bg-gray-100 absolute top-0 left-0 z-10">
                    <div id="progress-bar" class="h-full bg-[#6455E5] transition-all duration-300 ease-out" style="width: 0%;"></div>
                </div>

                <!-- SCREEN 2: TCLE -->
                <div id="screen-tcle" class="screen active p-6 sm:p-8">
                    <header class="mb-4 border-b border-gray-100 pb-3">
                        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1 uppercase font-sans">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)</h2>
                        <p class="text-gray-500 text-sm font-medium">Consentimento Pós-Informação e Validação do Experimento</p>
                    </header>
                    
                    <p class="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed text-justify">
                        Prezado(a) participante, agradecemos por concluir a atividade no simulador. Para garantir o rigor ético desta pesquisa acadêmica da Universidade Federal do Ceará (UFC), realizamos agora a formalização sobre a natureza deste estudo.
                    </p>
                    
                    <div class="max-w-none text-gray-600 space-y-3 mb-4 text-xs sm:text-sm leading-relaxed text-justify border border-gray-100 p-4 rounded-xl bg-gray-50">
                        <div>
                            <h3 class="text-gray-900 font-semibold mb-1">1. Esclarecimento do Objetivo</h3>
                            <p>Este experimento estuda o desempenho humano e a usabilidade em interfaces digitais. A variante de interface que você utilizou foi projetada seguindo o conceito de Radiant Patterns (Padrões Positivos), que se baseia na filosofia de Safety by Design, promovendo transparência, eficiência e total autonomia do utilizador. O objetivo de coletar sua percepção agora é estabelecer uma linha de base (baseline) de eficiência ideal para tarefas de cancelamento.</p>
                        </div>
                        
                        <div>
                            <h3 class="text-gray-900 font-semibold mb-1">2. Riscos e Minimização</h3>
                            <p>Por se tratar de um fluxo ético e otimizado, os riscos envolvidos foram mínimos, limitando-se ao esforço visual comum no uso de aplicações web cotidianas.</p>
                        </div>
                        
                        <div>
                            <h3 class="text-gray-900 font-semibold mb-1">3. Direitos e Consentimento de Uso (LGPD)</h3>
                            <p>Os dados computacionais de telemetria, capturados de forma anônima em segundo plano pelo simulador (tempo de execução do usuário, tempo de processamento da CPU, total de cliques, cliques errados e consumo de memória RAM), só serão computados em nossa base de dados estatística caso você dê o seu consentimento livre e esclarecido neste momento. Seus dados brutos serão mantidos em ambiente digital seguro e utilizados exclusivamente para este artigo acadêmico e potenciais publicações na área de Interação Humano-Computador.</p>
                        </div>

                        <div>
                            <h3 class="text-gray-900 font-semibold mb-1">4. Contatos e Canais de Comunicação</h3>
                            <p class="mb-2">Caso você tenha alguma dúvida sobre a pesquisa, queira retirar o seu consentimento de uso de dados posteriormente ou deseje acompanhar os resultados deste estudo, entre em contato com a equipe responsável:</p>
                            <ul class="space-y-1 list-none pl-1 text-gray-600">
                                <li>• Pesquisador Integrante: David Salviano - <a href="mailto:david52@alu.ufc.br" class="text-[#6455E5] hover:underline">david52@alu.ufc.br</a></li>
                                <li>• Pesquisadora Integrante: Aryely Matos - <a href="mailto:aryelymatos@alu.ufc.br" class="text-[#6455E5] hover:underline">aryelymatos@alu.ufc.br</a></li>
                                <li>• Pesquisadora Integrante: Thais Farias - <a href="mailto:thais.fcardoso@alu.ufc.br" class="text-[#6455E5] hover:underline">thais.fcardoso@alu.ufc.br</a></li>
                            </ul>
                        </div>
                    </div>

                    <p class="font-medium text-gray-800 text-xs sm:text-sm mb-3">Ao selecionar a opção abaixo, você confirma que leu este esclarecimento, compreendeu a natureza do teste e:</p>

                    <div class="space-y-2 mb-4">
                        <label class="relative flex cursor-pointer items-center">
                            <input type="radio" name="consentimento" value="ACEITO" class="peer sr-only radio-custom" onchange="window.app.onTcleChange('ACEITO')">
                            <div class="w-full flex items-start p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-xs sm:text-sm">
                                <div class="radio-dot-container w-4 h-4 mt-0.5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 transition-colors shrink-0">
                                    <div class="radio-dot w-2 h-2 rounded-full bg-transparent transition-transform transform scale-0"></div>
                                </div>
                                <div>
                                    <span class="text-gray-800 font-semibold block">ACEITO participar da pesquisa</span>
                                    <span class="text-gray-500 text-xs block mt-0.5">e autorizo o uso acadêmico dos dados anônimos da minha interação.</span>
                                </div>
                            </div>
                        </label>

                        <label class="relative flex cursor-pointer items-center">
                            <input type="radio" name="consentimento" value="NÃO ACEITO" class="peer sr-only radio-custom" onchange="window.app.onTcleChange('NÃO ACEITO')">
                            <div class="w-full flex items-start p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-xs sm:text-sm">
                                <div class="radio-dot-container w-4 h-4 mt-0.5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 transition-colors shrink-0">
                                    <div class="radio-dot w-2 h-2 rounded-full bg-transparent transition-transform transform scale-0"></div>
                                </div>
                                <div>
                                    <span class="text-gray-800 font-semibold block">NÃO ACEITO que os dados da minha interação sejam utilizados</span>
                                    <span class="text-gray-500 text-xs block mt-0.5">(neste caso, sua sessão será descartada e o formulário encerrado).</span>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="flex justify-end">
                        <button id="btn-tcle-continue" disabled onclick="window.app.onTcleContinue()" class="px-8 py-2.5 rounded-xl font-medium text-[#ffffff] bg-[#6455E5] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6455E5] focus:ring-offset-2 text-sm">
                            Continuar
                        </button>
                    </div>
                </div>

                <!-- SCREEN 3: FORMULÁRIO (SURVEY) -->
                <div id="screen-survey" class="screen" style="display: none;">
                    <div class="p-6 sm:p-8">
                        <header class="mb-6 border-b border-gray-100 pb-3">
                            <h2 id="form-main-title" class="text-xl sm:text-2xl font-bold text-gray-900 mb-1 font-sans">Perfil do Usuário</h2>
                            <h3 id="section-title" class="text-sm text-gray-500 font-medium">Seção 1</h3>
                        </header>
                        
                        <div id="questions-container" class="space-y-6 min-h-[250px]">
                            <!-- Questions will be injected here by JS -->
                        </div>

                        <p id="survey-validation-error" class="text-[#f0193d] text-sm hidden font-bold mt-4">⚠️ Por favor, responda todas as perguntas da seção para prosseguir.</p>

                        <div class="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <button id="btn-prev" onclick="window.app.surveyPrevPage()" class="px-6 py-2.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm focus:outline-none hidden text-sm">
                                ← Voltar
                            </button>
                            <div class="flex-grow"></div>
                            <button id="btn-next" onclick="window.app.surveyNextPage()" class="px-8 py-2.5 rounded-xl font-medium text-[#ffffff] bg-[#6455E5] hover:opacity-90 transition-colors shadow-sm focus:outline-none text-sm">
                                Próxima →
                            </button>
                            <button id="btn-submit" onclick="window.app.surveySubmit()" class="hidden px-8 py-2.5 rounded-xl font-medium text-[#ffffff] bg-[#6455E5] hover:opacity-90 transition-colors shadow-sm focus:outline-none text-sm">
                                Enviar Respostas ✓
                            </button>
                        </div>
                    </div>
                </div>

                <!-- SCREEN 4: REJEIÇÃO / DESCARTE -->
                <div id="screen-rejected" class="screen p-8 sm:p-12 text-center animate-fade-in" style="display: none;">
                    <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <p class="text-gray-700 mb-8 text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-center">
                        Obrigado por participar até aqui. Não se preocupe pois nenhum dos seus dados foram salvos e não serão utilizados nesta pesquisa acadêmica.
                    </p>
                    <button onclick="window.app.resetLab()" class="px-8 py-3 bg-[#6455E5] text-[#ffffff] rounded-xl hover:opacity-90 transition-all font-medium text-sm">
                        Voltar ao Início
                    </button>
                </div>

            </div>
        </div>

        <div id="custom-modal" class="fixed inset-0 z-50 hidden bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="modal-content">
                <div class="bg-[#6455E5] p-6 text-center text-white">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                        <svg class="w-8 h-8 text-[#6455E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white font-sans">Pesquisa Concluída!</h2>
                    <p class="text-purple-100 mt-1">Seus dados foram processados com sucesso.</p>
                </div>
                <div class="p-6 bg-gray-50 border-t border-gray-100 text-gray-700">
                    <p class="text-sm text-gray-600 mb-3 font-semibold">Resumo dos Dados Enviados para Pesquisa:</p>
                    <div id="modal-telemetry-summary" class="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 text-left">
                        <!-- Summary injected here -->
                    </div>
                    <div class="mt-6 flex justify-center">
                        <button id="modal-close-btn" onclick="window.app.resetLab()" class="px-8 py-2.5 bg-[#6455E5] text-[#ffffff] rounded-xl hover:opacity-90 transition-colors font-medium focus:outline-none">
                            Fechar Teste
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
