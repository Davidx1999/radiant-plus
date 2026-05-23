export const InstructionView = () => {
    const platformName = "Radiant Plus";

    return `
        <div class="flex-grow flex items-center justify-center p-4 sm:p-6 w-full max-w-4xl mx-auto animate-fade-in">
            <div class="w-full bg-white shadow-xl rounded-2xl overflow-hidden relative min-h-[400px]">
                <div id="screen-task" class="p-8 sm:p-12 text-gray-800">
                    <header class="mb-8 border-b border-gray-100 pb-6 text-center">
                        <span class="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold tracking-wide mb-3">Laboratório de Usabilidade</span>
                        <h2 class="text-3xl font-bold text-gray-900 font-sans">Sua Tarefa</h2>
                    </header>
                    
                    <div class="bg-indigo-50 rounded-2xl p-6 sm:p-8 mb-8 border border-indigo-100">
                        <p class="text-indigo-900 font-medium mb-4 text-lg">Imagine o seguinte cenário:</p>
                        <div class="space-y-4 text-indigo-800 text-lg leading-relaxed">
                            <p>Você é assinante da plataforma de streaming <strong>${platformName}</strong> há cerca de 6 meses. No entanto, você está fazendo um corte de gastos nas suas finanças pessoais este mês.</p>
                            <p class="bg-white p-4 rounded-xl border border-indigo-200 shadow-sm font-semibold text-xl text-center text-indigo-950">
                                O seu objetivo principal hoje é acessar a plataforma e <span class="text-red-600 underline decoration-red-300 decoration-4 underline-offset-4">cancelar a sua assinatura de forma definitiva</span>, para garantir que não haverá cobranças no próximo mês.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-10">
                        <svg class="w-6 h-6 text-yellow-600 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p class="text-yellow-800 text-sm">Por favor, interaja com a interface naturalmente, como se estivesse usando o seu próprio computador em casa. Leia as telas se achar necessário. O teste começará assim que você clicar no botão abaixo.</p>
                    </div>

                    <div class="flex justify-center space-x-4">
                        <button onclick="window.app.resetLab()" class="px-6 py-3 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">Voltar</button>
                        <button onclick="window.app.startSimulation()" class="ignorar-clique px-8 py-3 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Compreendi, Iniciar Tarefa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
