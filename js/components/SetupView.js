export const SetupView = () => {
    return `
        <div class="flex-grow flex items-center justify-center p-2 sm:p-4 w-full max-w-4xl mx-auto animate-fade-in">
            <div class="w-full bg-white shadow-xl rounded-2xl overflow-hidden relative border border-gray-100">
                <div id="screen-intro" class="p-6 sm:p-8">
                    <header class="mb-4 border-b border-gray-100 pb-3 text-center">
                        <span class="inline-block py-1 px-3 rounded-full bg-purple-50 text-[#6455E5] text-xs font-semibold tracking-wide mb-2">Pesquisa Acadêmica</span>
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Avaliação de Usabilidade em Interfaces Web</h1>
                    </header>
                    
                    <div class="max-w-none text-gray-600 text-sm sm:text-base leading-relaxed">
                        <p class="mb-4 text-center">Você está sendo convidado(a) a participar de um estudo acadêmico conduzido por estudantes da <strong>Universidade Federal do Ceará (UFC)</strong>, vinculado à disciplina de Avaliação de Desempenho de Sistemas Computacionais de 2026.1.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                            <!-- CARD 1 -->
                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col">
                                <h3 class="text-gray-900 font-semibold text-base mb-2 flex items-center shrink-0">
                                    <svg class="w-5 h-5 mr-2 text-[#6455E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    O que vou fazer?
                                </h3>
                                <p class="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">Você acessará um simulador web que reproduz o funcionamento de plataformas de entretenimento digital para realizar uma tarefa comum de navegação orientada pelo sistema. Em seguida, responderá a um breve questionário de percepção. O tempo total estimado é de <strong>3 a 5 minutos</strong>.</p>
                            </div>

                            <!-- CARD 2 -->
                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col">
                                <h3 class="text-gray-900 font-semibold text-base mb-2 flex items-center shrink-0">
                                    <svg class="w-5 h-5 mr-2 text-[#6455E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    Privacidade
                                </h3>
                                <p class="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">Em estrita conformidade com a LGPD (Lei nº 13.709/2018), esta aplicação não coleta nenhum dado de identificação pessoal (como nome, e-mail, IP, áudio ou imagem). O sistema registrará exclusivamente dados técnicos de desempenho e métricas passivas de interação (como cliques e tempo).</p>
                            </div>

                            <!-- CARD 3 -->
                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col">
                                <h3 class="text-gray-900 font-semibold text-base mb-2 flex items-center shrink-0">
                                    <svg class="w-5 h-5 mr-2 text-[#6455E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    Voluntariado
                                </h3>
                                <p class="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify">Sua participação é inteiramente voluntária. Você é livre para desistir e fechar a aba do navegador a qualquer momento, sem necessidade de justificativa ou qualquer tipo de penalidade.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 pt-4 border-t border-gray-100 flex flex-col items-center">
                        <p class="text-xs text-gray-500 mb-3 text-center max-w-lg">Ao clicar em avançar, você declara ser <strong>maior de 18 anos</strong> e autoriza o início da atividade sob estas condições de privacidade.</p>
                        <button onclick="window.app.prepareTest('radiant')" class="w-full sm:w-auto px-8 py-3 rounded-xl font-medium text-[#ffffff] bg-[#6455E5] hover:opacity-90 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#6455E5] focus:ring-offset-2 flex items-center justify-center">
                            Avançar para a Tarefa
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
