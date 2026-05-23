export const SetupView = () => {
    return `
        <div class="flex-grow flex items-center justify-center p-4 sm:p-6 w-full max-w-4xl mx-auto animate-fade-in">
            <div class="w-full bg-white shadow-xl rounded-2xl overflow-hidden relative min-h-[400px]">
                <div id="screen-intro" class="p-8 sm:p-12">
                    <header class="mb-8 border-b border-gray-100 pb-6 text-center">
                        <span class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide mb-3">Pesquisa Acadêmica</span>
                        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Avaliação de Usabilidade em Interfaces Web</h1>
                    </header>
                    
                    <div class="prose prose-blue max-w-none text-gray-600 space-y-6 text-base sm:text-lg leading-relaxed">
                        <p>Você está sendo convidado(a) a participar de um estudo acadêmico conduzida por estudantes da <strong>Universidade Federal do Ceará (UFC)</strong>, vinculado à disciplina de Avaliação de Desempenho de Sistemas Computacionais de 2026.1.</p>
                        
                        <div>
                            <h3 class="text-gray-900 font-semibold text-xl mb-2 flex items-center">
                                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                O que vou fazer?
                            </h3>
                            <p>Você acessará um simulador web que reproduz o funcionamento de plataformas de entretenimento digital para realizar uma tarefa comum de navegação orientada pelo sistema. Em seguida, responderá a um breve questionário de percepção. O tempo total estimado é de <strong>3 a 5 minutos</strong>.</p>
                        </div>

                        <div>
                            <h3 class="text-gray-900 font-semibold text-xl mb-2 flex items-center">
                                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                Privacidade e Anonimato
                            </h3>
                            <p>Em estrita conformidade com a LGPD (Lei nº 13.709/2018), esta aplicação não coleta nenhum dado de identificação pessoal (como nome, e-mail, IP, áudio ou imagem). O sistema registrará exclusivamente dados técnicos de desempenho e métricas passivas de interação (como tempo de resposta e contagem de cliques na tela).</p>
                        </div>

                        <div>
                            <h3 class="text-gray-900 font-semibold text-xl mb-2 flex items-center">
                                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                Voluntariado
                            </h3>
                            <p>Sua participação é inteiramente voluntária. Você pode desistir e fechar a aba do navegador a qualquer momento, sem qualquer tipo de justificativa ou penalidade.</p>
                        </div>
                    </div>

                    <div class="mt-10 pt-6 border-t border-gray-100 flex flex-col items-center">
                        <p class="text-sm text-gray-500 mb-4 text-center max-w-lg">Ao clicar em avançar, você declara ser <strong>maior de 18 anos</strong> e autoriza o início da atividade sob estas condições de privacidade.</p>
                        <button onclick="window.app.prepareTest('radiant')" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
                            Avançar para a Tarefa
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
