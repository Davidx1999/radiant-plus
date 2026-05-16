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
        
        this.state = {
            view: 'setup', // 'setup', 'instruction', 'catalog', 'settings', 'end'
            pattern: null, // 'dark', 'radiant'
            darkStep: 1,
            radiantStep: 1,
            isDarkMenuOpen: false,
            darkChecks: {
                surveyValue: null,
                surveyText: '',
                finalCheck: false
            },
            featuredIndex: 0,
            endMessage: ''
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

    finishLab(message) {
        this.setState({
            view: 'end',
            endMessage: message
        });
    }

    resetLab() {
        this.setState({
            pattern: null,
            view: 'setup',
            endMessage: ''
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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
