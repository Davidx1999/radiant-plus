export const EndView = (message, pattern, abandonou) => {
    return `
        <div class="flex-grow flex items-center justify-center p-4 sm:p-6 w-full max-w-4xl mx-auto animate-fade-in text-gray-800">
            <div class="w-full bg-white shadow-xl rounded-2xl overflow-hidden relative min-h-[400px]">
                
                <!-- PROGRESS BAR -->
                <div id="progress-container" class="hidden h-1.5 w-full bg-gray-100 absolute top-0 left-0 z-10">
                    <div id="progress-bar" class="h-full bg-blue-600 transition-all duration-300 ease-out" style="width: 0%;"></div>
                </div>

                <!-- SCREEN 2: TCLE -->
                <div id="screen-tcle" class="screen active p-8 sm:p-12">
                    <header class="mb-8 border-b border-gray-100 pb-6">
                        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 uppercase font-sans">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)</h2>
                        <p class="text-gray-500 font-medium">Consentimento Pós-Informação e Validação do Experimento</p>
                    </header>
                    
                    <div class="prose prose-blue max-w-none text-gray-600 space-y-6 mb-10 text-base sm:text-lg leading-relaxed text-justify max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                        <p>Prezado(a) participante, agradecemos por concluir a atividade no simulador. Para garantir o rigor ético desta pesquisa acadêmica da Universidade Federal do Ceará (UFC), realizamos agora a formalização sobre a natureza deste estudo.</p>
                        
                        <h3 class="text-gray-900 font-semibold text-lg mt-6 mb-2">1. Esclarecimento do Objetivo</h3>
                        <p>Este experimento estuda o desempenho humano e a usabilidade em interfaces digitais. A variante de interface que você utilizou foi projetada seguindo o conceito de Radiant Patterns (Padrões Positivos), que se baseia na filosofia de Safety by Design, promovendo transparência, eficiência e total autonomia do utilizador. O objetivo de coletar sua percepção agora é estabelecer uma linha de base (baseline) de eficiência ideal para tarefas de cancelamento.</p>
                        
                        <h3 class="text-gray-900 font-semibold text-lg mt-6 mb-2">2. Riscos e Minimização</h3>
                        <p>Por se tratar de um fluxo ético e otimizado, os riscos envolvidos foram mínimos, limitando-se ao esforço visual comum no uso de aplicações web cotidianas.</p>
                        
                        <h3 class="text-gray-900 font-semibold text-lg mt-6 mb-2">3. Direitos e Consentimento de Uso (LGPD)</h3>
                        <p>A telemetria capturada de forma anônima em segundo plano pelo simulador (tempo de execução do usuário, tempo de processamento da CPU, total de cliques e consumo de memória RAM) só será computada em nossa base de dados estatística caso você dê o seu consentimento livre e esclarecido neste momento. Seus dados brutos serão mantidos em ambiente digital seguro e utilizados exclusivamente para este artigo acadêmico e potenciais publicações na área de Interação Humano-Computador.</p>
                    </div>

                    <p class="font-medium text-gray-800 mb-4">Ao selecionar a opção abaixo, você confirma que leu este esclarecimento, compreendeu a natureza do teste e:</p>

                    <div class="space-y-3 mb-8">
                        <label class="relative flex cursor-pointer items-center">
                            <input type="radio" name="consentimento" value="ACEITO" class="peer sr-only radio-custom" onchange="window.app.onTcleChange('ACEITO')">
                            <div class="w-full flex items-start p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div class="radio-dot-container w-5 h-5 mt-0.5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 transition-colors shrink-0">
                                    <div class="radio-dot w-2.5 h-2.5 rounded-full bg-transparent transition-transform transform scale-0"></div>
                                </div>
                                <div>
                                    <span class="text-gray-800 font-semibold block">ACEITO participar da pesquisa</span>
                                    <span class="text-gray-500 text-sm block mt-1">e autorizo o uso acadêmico dos dados anônimos da minha interação.</span>
                                </div>
                            </div>
                        </label>

                        <label class="relative flex cursor-pointer items-center">
                            <input type="radio" name="consentimento" value="NÃO ACEITO" class="peer sr-only radio-custom" onchange="window.app.onTcleChange('NÃO ACEITO')">
                            <div class="w-full flex items-start p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                                <div class="radio-dot-container w-5 h-5 mt-0.5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 transition-colors shrink-0">
                                    <div class="radio-dot w-2.5 h-2.5 rounded-full bg-transparent transition-transform transform scale-0"></div>
                                </div>
                                <div>
                                    <span class="text-gray-800 font-semibold block">NÃO ACEITO que os dados da minha interação sejam utilizados</span>
                                    <span class="text-gray-500 text-sm block mt-1">(neste caso, sua sessão será descartada e o formulário encerrado).</span>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div class="flex justify-end">
                        <button id="btn-tcle-continue" disabled onclick="window.app.onTcleContinue()" class="px-8 py-3 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Continuar
                        </button>
                    </div>
                </div>

                <!-- SCREEN 3: FORMULÁRIO (SURVEY) -->
                <div id="screen-survey" class="screen">
                    <div class="p-8 sm:p-12">
                        <header class="mb-8 border-b border-gray-100 pb-4">
                            <h2 id="form-main-title" class="text-2xl font-bold text-gray-900 mb-1 font-sans">Formulário</h2>
                            <h3 id="section-title" class="text-gray-500 font-medium">Seção</h3>
                        </header>
                        
                        <div id="questions-container" class="space-y-10 min-h-[300px]">
                            <!-- Questions will be injected here by JS -->
                        </div>

                        <p id="survey-validation-error" class="text-[#f0193d] text-sm hidden font-bold mt-4">⚠️ Por favor, responda todas as perguntas da seção para prosseguir.</p>

                        <div class="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                            <button id="btn-prev" onclick="window.app.surveyPrevPage()" class="px-6 py-2.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm focus:outline-none hidden">
                                ← Voltar
                            </button>
                            <div class="flex-grow"></div>
                            <button id="btn-next" onclick="window.app.surveyNextPage()" class="px-8 py-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm focus:outline-none">
                                Próxima →
                            </button>
                            <button id="btn-submit" onclick="window.app.surveySubmit()" class="hidden px-8 py-2.5 rounded-xl font-medium text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm focus:outline-none">
                                Enviar Respostas ✓
                            </button>
                        </div>
                    </div>
                </div>

                <!-- SCREEN 4: REJEIÇÃO / DESCARTE -->
                <div id="screen-rejected" class="screen p-12 text-center animate-fade-in">
                    <div class="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-4 font-sans">Sessão Encerrada</h2>
                    <p class="text-gray-600 mb-2 text-lg">Você optou por não participar da pesquisa.</p>
                    <p class="text-gray-500 mb-10">Nenhum dado será armazenado e sua sessão de telemetria foi descartada de forma segura.</p>
                    <p class="text-sm text-gray-400 mb-4">Você já pode fechar esta aba ou retornar ao início.</p>
                    <button onclick="window.app.resetLab()" class="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">Voltar ao Início</button>
                </div>

            </div>
        </div>

        <div id="custom-modal" class="fixed inset-0 z-50 hidden bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="modal-content">
                <div class="bg-green-600 p-6 text-center text-white">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white font-sans">Pesquisa Concluída!</h2>
                    <p class="text-green-100 mt-1">Seus dados foram processados com sucesso.</p>
                </div>
                <div class="p-6 bg-gray-50 border-t border-gray-100 text-gray-700">
                    <p class="text-sm text-gray-600 mb-3 font-semibold">Simulação de Saída de Dados (Payload para o backend):</p>
                    <div class="bg-gray-900 rounded-lg p-4 max-h-64 overflow-y-auto mb-6">
                        <pre id="modal-json-output" class="text-xs text-green-400 font-mono text-left"></pre>
                    </div>
                    <p class="text-sm text-gray-600 mb-3 font-semibold">Resumo da Telemetria Enviada:</p>
                    <div id="modal-telemetry-summary" class="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 text-left">
                        <!-- Summary injected here -->
                    </div>
                    <div class="mt-6 flex justify-center">
                        <button id="modal-close-btn" onclick="window.app.resetLab()" class="px-8 py-2.5 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors font-medium focus:outline-none">
                            Fechar Teste
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
