export const EvaluationCard = (employee) => {
    const statusColors = {
        pending: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
        completed: "text-radiant-blue bg-radiant-blue/10 border-radiant-blue/20"
    };

    const statusLabels = {
        pending: "Pendente",
        completed: "Concluído"
    };

    return `
        <div class="bg-brand-panel border border-brand-border rounded-2xl p-6 hover:border-radiant-blue/50 transition-all group shadow-lg">
            <div class="flex items-start justify-between mb-6">
                <div class="flex items-center gap-4">
                    <img src="${employee.avatar}" alt="${employee.name}" class="w-12 h-12 rounded-full border border-brand-border group-hover:border-radiant-blue transition-colors">
                    <div>
                        <h3 class="text-brand-white font-bold text-lg">${employee.name}</h3>
                        <p class="text-brand-white/50 text-sm">${employee.role}</p>
                    </div>
                </div>
                <span class="text-xs font-bold uppercase px-2 py-1 rounded-md border ${statusColors[employee.status]}">
                    ${statusLabels[employee.status]}
                </span>
            </div>
            
            <div class="space-y-3 mb-6">
                <div class="flex justify-between text-xs text-brand-white/40">
                    <span>Departamento</span>
                    <span class="text-brand-white/60">${employee.department}</span>
                </div>
                <div class="flex justify-between text-xs text-brand-white/40">
                    <span>Última Avaliação</span>
                    <span class="text-brand-white/60">${employee.lastEvaluation}</span>
                </div>
            </div>

            <button 
                onclick="window.app.startEvaluation(${employee.id})"
                class="w-full py-3 ${employee.status === 'pending' ? 'bg-radiant-blue text-white' : 'bg-brand-surface text-brand-white/60'} rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                ${employee.status === 'completed' ? 'disabled' : ''}
            >
                ${employee.status === 'pending' ? '<i data-lucide="clipboard-check" class="w-4 h-4"></i> Avaliar Agora' : '<i data-lucide="eye" class="w-4 h-4"></i> Ver Resultado'}
            </button>
        </div>
    `;
};
