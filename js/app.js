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

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.bodyElement = document.getElementById('main-body');

        // Direto para o Radiant Plus
        this.state = {
            view: 'catalog', // Começa no catálogo
            pattern: 'radiant', // Força Radiant
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
            cliquesCount: 0 // Contador de cliques para telemetria
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
        // Incrementar cliques se for uma mudança de passo ou view
        if (newState.radiantStep || newState.view) {
            this.state.cliquesCount++;
        }

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
        this.setState({
            view: 'catalog',
            darkStep: 1,
            radiantStep: 1,
            darkChecks: { surveyValue: null, surveyText: '', finalCheck: false },
            isDarkMenuOpen: false
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
        // Optimistic state update
        this.state.darkChecks[checkId] = value;

        // If typing, update DOM manually to avoid full re-render flicker
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
            return; // Skip full render
        }

        this.render();
    }

    enviarDadosParaOExcel(variante, cliques) {
        const tempoCPU = performance.now();
        const memoriaBytes = performance.memory ? performance.memory.usedJSHeapSize : 0;
        const ramEmMB = (memoriaBytes / (1024 * 1024)).toFixed(2);

        const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSew5wW0PPVcnijXjbyhStfCS9fuKorg4Q_00FVgPPtgVyzzPw/formResponse";
        const mapeamentoDados = new URLSearchParams();

        // IDs Reais do Forms (Placeholder 1111... devem ser trocados pelos IDs de entry. do usuário)
        mapeamentoDados.append("entry.2102430702", variante);
        mapeamentoDados.append("entry.1764065739", tempoCPU.toFixed(2));
        mapeamentoDados.append("entry.2082699570", ramEmMB);
        mapeamentoDados.append("entry.1670653143", cliques);

        fetch(FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: mapeamentoDados
        })
            .then(() => console.log("Dados salvos automaticamente na planilha!"))
            .catch((erro) => console.error("Erro na telemetria:", erro));
    }

    finishLab(message) {
        // Enviar telemetria ao finalizar
        this.enviarDadosParaOExcel(this.state.pattern === 'radiant' ? 'Radiant Plus' : 'Dark Max', this.state.cliquesCount);

        this.setState({
            view: 'end',
            endMessage: message
        });
    }

    resetLab() {
        // Reinicia no catálogo do Radiant para o modo local
        this.setState({
            view: 'catalog',
            pattern: 'radiant',
            radiantStep: 1,
            cliquesCount: 0
        });
    }

    render() {
        this.appElement.innerHTML = '';

        // Background color logic
        if (this.state.pattern === 'radiant' && this.state.view !== 'setup' && this.state.view !== 'instruction') {
            this.bodyElement.style.backgroundColor = '#0a090c'; // Force Radiant Dark
            this.bodyElement.className = 'text-radiant-white min-h-screen flex flex-col font-sans transition-colors duration-500';
        } else {
            this.bodyElement.style.backgroundColor = '#0a0a0a'; // Force Brand BG
            this.bodyElement.className = 'text-brand-white min-h-screen flex flex-col font-sans transition-colors duration-500';
        }

        // Header Logic
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
                contentHtml = EndView(this.state.endMessage);
                break;
        }

        main.innerHTML = contentHtml;
        this.appElement.appendChild(main);

        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Telemetry Injection for EndView (Local Display)
        if (this.state.view === 'end') {
            setTimeout(() => {
                const tempoCPU = performance.now();
                const memoriaBytes = performance.memory ? performance.memory.usedJSHeapSize : 0;
                const memoriaMB = (memoriaBytes / (1024 * 1024)).toFixed(2);

                const panel = document.getElementById("ads-computacional-painel");
                if (panel) {
                    panel.innerHTML = `
                        <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); padding: 25px; border-radius: 16px; margin-top: 20px; color: #fff; text-align: left; backdrop-filter: blur(10px);">
                            <h4 style="color: #4ff; margin-top: 0; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; font-size: 12px;">Telemetria Computacional (ADS)</h4>
                            <p style="font-size: 14px; opacity: 0.8; margin-bottom: 20px;"><b>Por favor, tire um print desta tela e envie ao pesquisador.</b></p>
                            <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 2;">
                                <li><span style="opacity: 0.5;">CPU (Script Execution):</span> <b style="color: #4ff;">${tempoCPU.toFixed(2)} ms</b></li>
                                <li><span style="opacity: 0.5;">RAM Usage (Tab):</span> <b style="color: #4ff;">${memoriaMB} MB</b></li>
                                <li><span style="opacity: 0.5;">Total de Cliques:</span> <b style="color: #4ff;">${this.state.cliquesCount}</b></li>
                                <li><span style="opacity: 0.5;">Timestamp:</span> ${new Date().toLocaleTimeString()}</li>
                            </ul>
                        </div>
                    `;
                }
            }, 600);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
