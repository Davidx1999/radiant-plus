export const InstructionView = (pattern) => {
    const isRadiant = pattern === 'radiant';
    const platformName = isRadiant ? "Radiant Plus" : "Dark Max";
    const accentColor = isRadiant ? "bg-radiant-blue" : "bg-brand-red";
    const textColor = isRadiant ? "text-radiant-blue" : "text-brand-red";
    const buttonColor = isRadiant ? "bg-radiant-blue" : "bg-brand-red";

    return `
        <div id="view-instruction" class="w-full px-12 p-4 sm:p-6 py-20 animate-fade-in flex-grow flex items-center">
            <div class="bg-brand-panel border border-brand-border rounded-2xl p-8 sm:p-12 shadow-2xl w-full relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-2 ${accentColor}"></div>

                <div class="mb-8">
                    <span class="text-xs font-bold uppercase tracking-widest text-brand-white/40 mb-2 block">Laboratório de Usabilidade</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-brand-white">Sua Tarefa</h2>
                </div>

                <div class="space-y-6 text-lg text-brand-white/70 leading-relaxed">
                    <p>Imagine o seguinte cenário:</p>
                    <div class="p-6 bg-brand-surface rounded-xl border border-brand-border/50 text-brand-white/90">
                        <p>
                            Você é assinante da plataforma de streaming <strong class="${textColor} font-bold">${platformName}</strong> há cerca de 6 meses. No entanto, você está fazendo um corte de gastos nas suas finanças pessoais este mês.
                        </p>
                        <br>
                        <p>
                            O seu objetivo principal hoje é <strong>acessar a plataforma e cancelar a sua assinatura</strong> de forma definitiva, para garantir que não haverá cobranças no próximo mês.
                        </p>
                    </div>
                    <p class="text-sm text-brand-white/50">
                        * Por favor, interaja com a interface naturalmente, como se estivesse usando o seu próprio computador em casa. Leia as telas se achar necessário. O teste começará assim que você clicar no botão abaixo.
                    </p>
                </div>

                <div class="mt-10 flex justify-end">
                    <button onclick="window.app.startSimulation()" class="px-8 py-4 ${buttonColor} text-white font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                        Compreendi, Iniciar Tarefa <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
};
