export const EvaluationForm = (employee, criteria) => {
    return `
        <div class="max-w-3xl mx-auto p-4 sm:p-6 py-20 animate-fade-in">
            <div class="bg-brand-panel border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
                <div class="bg-radiant-blue p-3 text-center text-xs font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2">
                    <i data-lucide="clipboard-list" class="w-4 h-4"></i> Avaliação de Desempenho
                </div>
                
                <div class="p-8 sm:p-12">
                    <!-- Header -->
                    <div class="flex items-center gap-6 mb-12 pb-8 border-b border-brand-surface">
                        <img src="${employee.avatar}" alt="${employee.name}" class="w-20 h-20 rounded-2xl border-2 border-radiant-blue shadow-lg shadow-radiant-blue/20">
                        <div>
                            <span class="text-xs font-bold text-radiant-blue uppercase tracking-widest">A avaliar</span>
                            <h2 class="text-3xl font-black text-brand-white">${employee.name}</h2>
                            <p class="text-brand-white/50">${employee.role} • ${employee.department}</p>
                        </div>
                    </div>

                    <form id="evaluation-form" onsubmit="window.app.submitEvaluation(event, ${employee.id})" class="space-y-10">
                        ${criteria.map((item, index) => `
                            <div class="space-y-4 animate-slide-up" style="animation-delay: ${index * 0.1}s">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-radiant-blue/10 rounded-full flex items-center justify-center">
                                        <i data-lucide="${item.icon}" class="text-radiant-blue w-5 h-5"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-brand-white text-lg">${item.label}</h4>
                                        <p class="text-xs text-brand-white/40">${item.description}</p>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-5 gap-3">
                                    ${[1, 2, 3, 4, 5].map(rating => `
                                        <label class="cursor-pointer group">
                                            <input type="radio" name="${item.id}" value="${rating}" class="hidden peer" required>
                                            <div class="h-14 flex items-center justify-center rounded-xl bg-brand-surface border border-brand-border text-brand-white/40 font-bold transition-all peer-checked:bg-radiant-blue peer-checked:text-white peer-checked:border-radiant-blue group-hover:border-radiant-blue/50">
                                                ${rating}
                                            </div>
                                        </label>
                                    `).join('')}
                                </div>
                                <div class="flex justify-between text-[10px] uppercase tracking-tighter text-brand-white/30 font-bold px-1">
                                    <span>Insatisfatório</span>
                                    <span>Excecional</span>
                                </div>
                            </div>
                        `).join('')}

                        <div class="space-y-4 pt-4">
                            <label class="block text-sm font-bold text-brand-white mb-2">Comentários Adicionais</label>
                            <textarea 
                                name="comments"
                                class="w-full bg-brand-surface border border-brand-border rounded-xl p-4 text-brand-white placeholder:text-brand-white/20 focus:outline-none focus:border-radiant-blue transition-colors min-h-[120px]"
                                placeholder="Descreva pontos fortes e áreas de melhoria..."
                            ></textarea>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 pt-10">
                            <button 
                                type="button"
                                onclick="window.app.goTo('dashboard')"
                                class="w-full sm:w-1/3 py-4 border border-brand-border text-brand-white font-bold rounded-xl hover:bg-brand-surface transition-all"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                class="w-full sm:w-2/3 py-4 bg-radiant-blue hover:bg-[#0066cc] text-white font-bold rounded-xl transition-all shadow-lg shadow-radiant-blue/30 flex items-center justify-center gap-2"
                            >
                                Finalizar Avaliação <i data-lucide="arrow-right" class="w-5 h-5"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};
