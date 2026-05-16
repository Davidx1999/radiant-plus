export const SetupView = () => {
    return `
        <div class="min-h-screen flex items-center justify-center p-6 animate-fade-in bg-brand-bg">
            <div class="max-w-2xl w-full space-y-6 py-12">

                <!-- Header -->
                <div class="text-center space-y-4 mb-2">
                    <span class="inline-block text-xs font-black uppercase tracking-[0.3em] text-brand-white/80 bg-white/10 px-4 py-2 rounded-full">
                        Estudo de Usabilidade
                    </span>
                    <h1 class="text-4xl sm:text-5xl font-black text-brand-white tracking-tighter leading-tight">
                        Olá! Seja muito <span class="text-brand-white/60">bem-vindo(a)</span>.
                    </h1>
                    <p class="text-brand-white/80 text-base leading-relaxed text-justify w-full">
                        Você foi convidado a nos ajudar em uma pesquisa de avaliação de desempenho. Para começar, navegue com tranquilidade: leia as telas se achar necessário e interaja com total naturalidade. Lembramos de que não existem respostas certas ou erradas.
                    </p>
                </div>

                <!-- O que acontece a seguir? -->
                <div class="bg-[#1a1f2e] rounded-2xl border border-white/5 p-8 shadow-2xl space-y-5">
                    <div class="flex items-center gap-3 mb-1">
                        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                            <i data-lucide="help-circle" class="text-brand-white w-5 h-5"></i>
                        </div>
                        <h2 class="text-xl font-black text-brand-white tracking-tight">O que acontece a seguir?</h2>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-white">
                                <i data-lucide="check" class="w-3.5 h-3.5"></i>
                            </div>
                            <p class="text-brand-white/80 text-sm leading-relaxed">
                                <strong class="text-brand-white font-bold">Ao concluir:</strong> pedimos que responda a apenas 3 perguntas rápidas de múltipla escolha para avaliar sua experiência.
                            </p>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-white">
                                <i data-lucide="x" class="w-3.5 h-3.5"></i>
                            </div>
                            <p class="text-brand-white/80 text-sm leading-relaxed">
                                <strong class="text-brand-white font-bold">Se quiser parar:</strong> se preferir desistir no meio do caminho, não há problema nenhum.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-white">
                                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                            </div>
                            <p class="text-brand-white/80 text-sm leading-relaxed">
                                <strong class="text-brand-white font-bold">Dica de ouro:</strong> Estamos testando a funcionalidade, não você. Toda ajuda é muito bem-vinda!
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Informações de Privacidade -->
                <div class="bg-[#1a1f2e] rounded-2xl border border-white/5 p-6 flex gap-4">
                    <i data-lucide="shield-check" class="text-brand-white/80 w-6 h-6 shrink-0 mt-0.5"></i>
                    <div class="space-y-1">
                        <p class="text-brand-white/90 text-sm font-black uppercase tracking-widest">Informações de Privacidade</p>
                        <p class="text-brand-white/70 text-sm leading-relaxed">
                            Nenhum dado pessoal seu será coletado ou identificado. Este estudo registra apenas métricas de interação anônimas (como o número de cliques e o tempo de conclusão da tarefa), exclusivamente para fins de pesquisa científica no âmbito de um projeto acadêmico.
                        </p>
                    </div>
                </div>

                <!-- CTA -->
                <div class="pt-2">
                    <button
                        onclick="window.app.prepareTest('radiant')"
                        class="w-full py-5 bg-brand-white hover:bg-brand-white/95 text-[#0a0a0a] font-black rounded-xl transition-all shadow-2xl uppercase tracking-widest text-base flex items-center justify-center gap-3"
                    >
                        Avançar para a Tarefa
                        <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </button>
                </div>

                <div class="text-center opacity-20 hover:opacity-40 transition-opacity pt-2">
                    <p class="text-xs font-medium uppercase tracking-[0.3em] text-brand-white">Radiant Plus v1.0.0 • Simulation Lab</p>
                </div>

            </div>
        </div>
    `;
};
