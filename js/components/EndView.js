export const EndView = (message) => {
    return `
        <div id="view-end" class="w-full px-12 p-4 py-20 text-center animate-zoom-in flex-grow flex flex-col justify-center items-center">
            <i data-lucide="flag-checkered" class="w-16 h-16 text-brand-white mb-6"></i>
            <h1 class="text-4xl font-bold text-brand-white mb-4">Teste Concluído</h1>
            <p id="end-message" class="text-brand-white/60 text-lg mb-10">${message}</p>
            <button onclick="window.app.resetLab()" class="px-6 py-3 bg-brand-surface text-brand-white rounded-lg hover:bg-brand-border transition-colors">
                Voltar ao Painel do Pesquisador
            </button>
        </div>
    `;
};
