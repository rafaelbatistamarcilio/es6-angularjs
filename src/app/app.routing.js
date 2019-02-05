
export class AppRouting {

    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.setStates();
    }

    static forRoot($stateProvider, $urlRouterProvider) {
        return new AppRouting($stateProvider, $urlRouterProvider);
    }

    getHome() {
        return {
            name: 'home',
            url: '/',
            component: 'appHome',
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "home.module" */ './home/home.module.js');
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
                return $ocLazyLoad.load(bundle.HomeModule);
            }
        }
    }

    getPlanetasState() {
        return {
            name: 'planetas',
            url: '/planetas',
            component: 'appPlanetasLista',
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "planetas.module" */ './planetas/planetas.module.js');
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
                return $ocLazyLoad.load(bundle.PlanetasModule);
            }
        }
    }

    getPersonagensState() {
        return {
            name: 'personagens',
            url: '/personagens',
            component: 'appPersonagensLista',
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "personagens.module" */ './personagens/personagens.module.js');
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
                return $ocLazyLoad.load(bundle.PersonagensModule);
            }
        }
    }

    getWizardState() {
        return {
            name: 'wizard',
            url: '/wizard',
            component: 'appWizard',
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "wizard.module" */ './wizard/wizard.module.js');
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
                return $ocLazyLoad.load(bundle.WizardModule);
            }
        }
    }

    setStates() {
        this.$stateProvider.state(this.getHome());
        this.$stateProvider.state(this.getPlanetasState());
        this.$stateProvider.state(this.getPersonagensState());
        this.$stateProvider.state(this.getWizardState());
        this.$urlRouterProvider.otherwise('/');
    }
}

AppRouting.$inject = ['$stateProvider', '$urlRouterProvider'];