export const InstructionView = () => {
    const platformName = "Radiant Plus";

    return `
        <div id="view-instruction" class="w-full px-12 p-4 sm:p-6 py-20 animate-fade-in flex-grow flex items-center justify-center">
            <div class="bg-brand-panel border border-brand-border rounded-2xl p-8 sm:p-12 shadow-2xl max-w-2xl w-full relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-2 bg-brand-white/40"></div>

                <div class="mb-8">
                    <span class="text-xs font-bold uppercase tracking-widest text-brand-white/40 mb-2 block">Laboratório de Usabilidade</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-brand-white">Sua Tarefa</h2>
                </div>

                <div class="space-y-6 text-lg text-brand-white/70 leading-relaxed">
                    <p>Imagine o seguinte cenário:</p>
                    <div class="p-6 bg-brand-surface rounded-xl border border-brand-border/50 text-brand-white/90">
                        <p>
                            Você é assinante da plataforma de streaming <strong class="text-brand-white font-black underline">${platformName}</strong> há cerca de 6 meses. No entanto, você está fazendo um corte de gastos nas suas finanças pessoais este mês.
                        </p>
                        <br>
                        <p>
                            O seu objetivo principal hoje é <strong>acessar a plataforma e cancelar a sua assinatura</strong> de forma definitiva, para garantir que não haverá cobranças no próximo mês.
                        </p>
                    </div>
                    <p class="text-sm text-brand-white/85 font-semibold bg-white/5 p-4 rounded-lg border border-white/5 flex items-center gap-2.5">
                        <i data-lucide="info" class="text-brand-white/80 w-4 h-4 shrink-0"></i>
                        Por favor, interaja com a interface naturalmente, como se estivesse usando o seu próprio computador em casa. Leia as telas se achar necessário. O teste começará assim que você clicar no botão abaixo.
                    </p>
                </div>

                <div class="mt-10 flex justify-end">
                    <button onclick="window.app.startSimulation()" class="ignorar-clique px-8 py-4 bg-brand-white hover:bg-brand-white/95 text-[#0a0a0a] font-bold rounded-lg transition-transform flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                        Compreendi, Iniciar Tarefa <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
};
