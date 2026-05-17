import { categories, fictionalTitles, featuredContent } from './data/mockData.js';
import { SetupView } from './components/SetupView.js';
import { InstructionView } from './components/InstructionView.js';
import { HeaderRadiant } from './components/HeaderRadiant.js';
import { HeaderDark } from './components/HeaderDark.js';
import { CatalogRadiant } from './components/CatalogRadiant.js';
import { CatalogDark } from './components/CatalogDark.js';
import { SettingsRadiant } from './components/SettingsRadiant.js';
import { SettingsDark } from './components/SettingsDark.js';
import { EndView } from './components/EndView.js';


// =====================================================
// VARIÁVEIS GLOBAIS DE TELEMETRIA
// =====================================================
window.start_time_ms = 0;
window.end_time_ms = 0;
window.clics_errados = 0;
window.clics_totais = 0;

// Escutador inteligente de cliques reais atualizado
document.addEventListener('click', function(evento) {
    // 1. Se o clique acontecer dentro de uma área marcada com 'ignorar-clique', o código para e não conta.
    if (evento.target.closest('.ignorar-clique')) {
        return; 
    }

    // 2. Conta apenas elementos interativos da tarefa
    const clicouEmElementoInterativo = evento.target.closest('button, a, input, select, label, textarea');
    
    if (clicouEmElementoInterativo) {
        window.clics_totais++;
        console.log("Clique válido na tarefa registrado! Total:", window.clics_totais);
    }
});

// Variáveis de Avaliação Pós-Tarefa
window.qCansativo = "";
window.qSeguro = "";
window.qVoltaria = "";
window.qFeedbackAdicional = "";

window.atualizarPesquisaFinal = function(campo, valor) {
    if (campo === 'cansativo') window.qCansativo = valor;
    if (campo === 'seguro') window.qSeguro = valor;
    if (campo === 'voltaria') window.qVoltaria = valor;
    if (campo === 'feedback') window.qFeedbackAdicional = valor;
};

window.validarEEnviar = (abandonou, isDark) => {
    const q1 = document.querySelector('input[name="p_cansativo"]:checked');
    const q2 = document.querySelector('input[name="p_seguro"]:checked');
    const q3 = document.querySelector('input[name="p_voltaria"]:checked');
    const q4 = (isDark && abandonou) ? document.querySelector('input[name="p_proposital"]:checked') : true;

    if (!q1 || !q2 || !q3 || !q4) {
        const error = document.getElementById('validation-error');
        if (error) {
            error.classList.remove('hidden');
            error.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    window.enviarTelemetria(abandonou);
};

// =====================================================
// FUNÇÃO GLOBAL DE ENVIO DE TELEMETRIA (GOOGLE FORMS)
// =====================================================
window.enviarTelemetria = function(usuarioAbandonou = false) {

    // Dados Computacionais
    const tempo_cpu = window.end_time_ms - window.start_time_ms;
    const memoria_bytes = performance.memory ? performance.memory.usedJSHeapSize : 0;
    const ram_mb = (memoria_bytes / (1024 * 1024)).toFixed(2);
    const tempo_usuario_seg = (tempo_cpu / 1000).toFixed(2);

    // Variante e survey
    const nomeVariante = window.app && window.app.state.pattern === 'radiant' ? 'Radiant Plus' : 'Dark Max';
    
    let respondeuSurvey = 'Não';
    if (nomeVariante === 'Radiant Plus') {
        respondeuSurvey = window.radiantRespondeuSurvey || 'Não';
    } else {
        respondeuSurvey = 'Sim'; // Dark sempre chega ao final com o survey
    }

    const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSew5wW0PPVcnijXjbyhStfCS9fuKorg4Q_00FVgPPtgVyzzPw/formResponse';
    const dados = new URLSearchParams();

    // Telemetria Base (entry IDs do Forms real)
    dados.append('entry.1532613467', nomeVariante);
    dados.append('entry.1345222698', tempo_cpu.toFixed(2));
    dados.append('entry.1504379310', ram_mb);
    dados.append('entry.778706530',  tempo_usuario_seg);
    dados.append('entry.2138517373', window.clics_totais);
    dados.append('entry.1179815513', window.clics_errados);
    dados.append('entry.713314953',  usuarioAbandonou ? 'Sim' : 'Não');
    dados.append('entry.1262590802', respondeuSurvey);

    // Avaliação de Fluxo Pós-Tarefa
    dados.append('entry.909552708',  window.qFeedbackAdicional); 
    dados.append('entry.1715303114', window.qCansativo);         
    dados.append('entry.1307350453', window.qSeguro);            
    dados.append('entry.792377157',  window.qVoltaria);          

    // Feedback visual de envio
    const btn = document.getElementById('btn-finish-telemetry');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Enviando...';
    }

    fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: dados })
        .then(() => {
            const surveyContainer = document.getElementById('survey-end-container');
            const adsPanel = document.getElementById('ads-computacional-painel');
            const resetBtn = document.getElementById('final-reset-button');
            
            if (surveyContainer) surveyContainer.classList.add('hidden');
            if (adsPanel) {
                adsPanel.classList.remove('hidden');
                adsPanel.innerHTML = `
                    <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);padding:30px;border-radius:24px;color:#fff;text-align:left;backdrop-filter:blur(10px);box-shadow:0 20px 50px rgba(0,0,0,0.3);">
                        <h4 style="color:#4ff;margin-top:0;font-weight:900;letter-spacing:1px;text-transform:uppercase;font-size:12px;">✅ Telemetria Enviada com Sucesso</h4>
                        <p style="font-size:14px;opacity:0.8;margin-bottom:20px;"><b>Tire um print desta tela para o pesquisador.</b></p>
                        <ul style="list-style:none;padding:0;margin:0;font-size:14px;line-height:2.4;">
                            <li><span style="opacity:0.5;">Variante:</span> <b style="color:#4ff;">${nomeVariante}</b></li>
                            <li><span style="opacity:0.5;">Tempo Total (Usuário):</span> <b style="color:#4ff;">${tempo_usuario_seg} s</b></li>
                            <li><span style="opacity:0.5;">CPU (Script Execution):</span> <b style="color:#4ff;">${tempo_cpu.toFixed(2)} ms</b></li>
                            <li><span style="opacity:0.5;">RAM Usage (Tab):</span> <b style="color:#4ff;">${ram_mb} MB</b></li>
                            <li><span style="opacity:0.5;">Cliques Totais:</span> <b style="color:#4ff;">${window.clics_totais}</b></li>
                            <li><span style="opacity:0.5;">Cliques Errados:</span> <b style="color:#f44;">${window.clics_errados}</b></li>
                            <li><span style="opacity:0.5;">Abandonou:</span> <b style="color:${usuarioAbandonou ? '#f44' : '#4ff'};">${usuarioAbandonou ? 'Sim' : 'Não'}</b></li>
                            <li><span style="opacity:0.5;">Respondeu Survey:</span> <b style="color:#4ff;">${respondeuSurvey}</b></li>
                            <li style="border-top:1px solid rgba(255,255,255,0.05);margin-top:12px;padding-top:12px;"><span style="opacity:0.5;">Cansativo (1-5):</span> <b style="color:#4ff;">${window.qCansativo || '-'}</b></li>
                            <li><span style="opacity:0.5;">Segurança (1-5):</span> <b style="color:#4ff;">${window.qSeguro || '-'}</b></li>
                            <li><span style="opacity:0.5;">Voltaria:</span> <b style="color:#4ff;">${window.qVoltaria || '-'}</b></li>
                            ${window.qFeedbackAdicional ? `<li><span style="opacity:0.5;">Escolha Proposital:</span> <b style="color:#4ff;">${window.qFeedbackAdicional}</b></li>` : ''}
                            <li style="border-top:1px solid rgba(255,255,255,0.05);margin-top:12px;padding-top:12px;"><span style="opacity:0.5;">Timestamp:</span> ${new Date().toLocaleTimeString()}</li>
                        </ul>
                    </div>
                `;
            }
            if (resetBtn) resetBtn.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
        })
        .catch((erro) => {
            console.error('Erro na telemetria:', erro);
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = "Erro ao enviar. Tentar novamente?";
            }
        });
};

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.bodyElement = document.getElementById('main-body');
        
        this.state = {
            view: 'setup', 
            pattern: null, 
            darkStep: 1,
            radiantStep: 1,
            isDarkMenuOpen: false,
            darkChecks: {
                surveyValue: null,
                surveyText: '',
                finalCheck: false
            },
            featuredIndex: 0,
            endMessage: '',
            abandonou: false
        };

        window.app = this;
        this.initScrollListener();
        this.init();
    }

    nextHero() {
        const nextIndex = (this.state.featuredIndex + 1) % featuredContent.length;
        this.setState({ featuredIndex: nextIndex });
    }

    initScrollListener() {
        window.addEventListener('scroll', () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        });
    }

    init() {
        this.render();
    }

    setState(newState) {
        const viewChanged = newState.view && newState.view !== this.state.view;
        const patternChanged = newState.pattern && newState.pattern !== this.state.pattern;
        
        this.state = { ...this.state, ...newState };
        this.render();

        if (viewChanged || patternChanged) {
            window.scrollTo(0, 0);
        }
    }

    prepareTest(pattern) {
        this.setState({
            pattern,
            view: 'instruction'
        });
    }

    startSimulation() {
        window.start_time_ms = performance.now();
        window.clics_errados = 0;
        window.clics_totais  = 0;
        
        window.qCansativo = "";
        window.qSeguro = "";
        window.qVoltaria = "";
        window.qFeedbackAdicional = "";
        window.radiantRespondeuSurvey = "";

        this.setState({
            view: 'catalog',
            darkStep: 1,
            radiantStep: 1,
            darkChecks: { surveyValue: null, surveyText: '', finalCheck: false },
            isDarkMenuOpen: false,
            abandonou: false
        });
    }

    goToCatalog() {
        this.setState({ view: 'catalog' });
    }

    goToSettings() {
        this.setState({ view: 'settings' });
    }

    setDarkStep(step) {
        this.setState({ darkStep: step });
    }

    setRadiantStep(step) {
        this.setState({ radiantStep: step });
    }

    toggleDarkProfileMenu() {
        this.setState({ isDarkMenuOpen: !this.state.isDarkMenuOpen });
    }

    updateDarkChecks(checkId, value) {
        this.state.darkChecks[checkId] = value;

        if (checkId === 'surveyText' && this.state.darkStep === 3) {
            const btn = document.querySelector('#dark-step-3 button');
            if (btn) {
                const isOtherSelected = this.state.darkChecks.surveyValue === 'other';
                const isSurveyValid = this.state.darkChecks.surveyValue && (!isOtherSelected || (value && value.trim().length > 0));
                
                btn.disabled = !isSurveyValid;
                if (isSurveyValid) {
                    btn.className = "w-full py-4 font-bold rounded-lg transition-all bg-brand-surface hover:bg-brand-border text-brand-white border border-brand-border cursor-pointer shadow-lg";
                } else {
                    btn.className = "w-full py-4 font-bold rounded-lg transition-all bg-brand-surface text-brand-white/20 cursor-not-allowed border border-transparent";
                }
            }
            return; 
        }

        this.render();
    }

    finishLab(abandonou = false) {
        window.end_time_ms = performance.now();

        const selectEl = document.querySelector('#radiant-step-3 select');
        window.radiantRespondeuSurvey = (selectEl && selectEl.value !== '') ? 'Sim' : 'Não';

        const isDark = this.state.pattern === 'dark';
        if (!isDark || !abandonou) {
            window.qFeedbackAdicional = 'Irrelevante';
        }

        const msg = abandonou 
            ? 'Você desistiu do cancelamento e manteve a assinatura ativa.' 
            : 'O cancelamento foi concluído com sucesso!';
            
        this.setState({
            view: 'end',
            endMessage: msg,
            abandonou: abandonou
        });
    }

    resetLab() {
        this.setState({
            pattern: null,
            view: 'setup',
            endMessage: '',
            abandonou: false
        });
    }

    render() {
        this.appElement.innerHTML = '';
        
        if (this.state.pattern === 'radiant' && this.state.view !== 'setup' && this.state.view !== 'instruction') {
            this.bodyElement.style.backgroundColor = '#0a090c'; 
            this.bodyElement.className = 'text-radiant-white min-h-screen flex flex-col font-sans transition-colors duration-500';
        } else {
            this.bodyElement.style.backgroundColor = '#0a0a0a'; 
            this.bodyElement.className = 'text-brand-white min-h-screen flex flex-col font-sans transition-colors duration-500';
        }

        if (this.state.view === 'catalog' || this.state.view === 'settings') {
            if (this.state.pattern === 'dark') {
                this.appElement.insertAdjacentHTML('beforeend', HeaderDark(this.state.isDarkMenuOpen, this.state.view));
            } else {
                this.appElement.insertAdjacentHTML('beforeend', HeaderRadiant(this.state.view));
            }
        }

        const main = document.createElement('main');
        main.className = 'flex-grow';
        
        if (this.state.view === 'settings') {
            main.className = 'flex-grow flex flex-col';
        }
        
        let contentHtml = '';
        switch (this.state.view) {
            case 'setup':
                contentHtml = SetupView();
                break;
            case 'instruction':
                contentHtml = InstructionView(this.state.pattern);
                break;
            case 'catalog':
                contentHtml = this.state.pattern === 'dark' 
                    ? CatalogDark(categories, fictionalTitles, featuredContent, this.state.featuredIndex) 
                    : CatalogRadiant(categories, fictionalTitles, featuredContent, this.state.featuredIndex);
                break;
            case 'settings':
                contentHtml = this.state.pattern === 'dark'
                    ? SettingsDark(this.state.darkStep, this.state.darkChecks)
                    : SettingsRadiant(this.state.radiantStep);
                break;
            case 'end':
                contentHtml = EndView(this.state.endMessage, this.state.pattern, this.state.abandonou);
                break;
        }

        main.innerHTML = contentHtml;
        this.appElement.appendChild(main);

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
