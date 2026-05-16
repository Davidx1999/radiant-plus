import { EvaluationCard } from './EvaluationCard.js';

export const Dashboard = (employees) => {
    const pendingCount = employees.filter(e => e.status === 'pending').length;
    const completedCount = employees.length - pendingCount;

    return `
        <div class="max-w-7xl mx-auto p-4 sm:p-6 py-10 animate-fade-in">
            <div class="mb-10">
                <h1 class="text-3xl md:text-5xl font-bold text-brand-white tracking-tight mb-4">Painel de Avaliações</h1>
                <p class="text-brand-white/60 text-lg max-w-2xl">
                    Gerencie e acompanhe o desempenho da sua equipa com transparência e clareza.
                </p>
            </div>

            <!-- Stats Overview -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div class="bg-brand-panel border border-brand-border rounded-2xl p-6 flex items-center gap-5">
                    <div class="w-12 h-12 bg-radiant-blue/10 rounded-xl flex items-center justify-center">
                        <i data-lucide="users" class="text-radiant-blue"></i>
                    </div>
                    <div>
                        <p class="text-brand-white/40 text-xs font-bold uppercase tracking-wider">Total Equipa</p>
                        <p class="text-2xl font-bold text-brand-white">${employees.length}</p>
                    </div>
                </div>
                <div class="bg-brand-panel border border-brand-border rounded-2xl p-6 flex items-center gap-5">
                    <div class="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                        <i data-lucide="clock" class="text-brand-orange"></i>
                    </div>
                    <div>
                        <p class="text-brand-white/40 text-xs font-bold uppercase tracking-wider">Pendentes</p>
                        <p class="text-2xl font-bold text-brand-white">${pendingCount}</p>
                    </div>
                </div>
                <div class="bg-brand-panel border border-brand-border rounded-2xl p-6 flex items-center gap-5">
                    <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                        <i data-lucide="check-circle" class="text-green-500"></i>
                    </div>
                    <div>
                        <p class="text-brand-white/40 text-xs font-bold uppercase tracking-wider">Concluídas</p>
                        <p class="text-2xl font-bold text-brand-white">${completedCount}</p>
                    </div>
                </div>
            </div>

            <!-- Evaluation List -->
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold text-brand-white">Colaboradores</h2>
                    <div class="flex gap-2">
                         <button class="px-4 py-2 bg-brand-surface border border-brand-border rounded-lg text-sm text-brand-white/60 hover:text-brand-white transition-colors">
                            Filtrar
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${employees.map(e => EvaluationCard(e)).join('')}
                </div>
            </div>
        </div>
    `;
};
