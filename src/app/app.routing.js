export class AppRouting {

    /**
     * @param {angular.ui.IStateProvider} $stateProvider
     * @param {angular.ui.IUrlRouterProvider} $urlRouterProvider
     */
    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.setStates();
    }

    static forRoot($stateProvider, $urlRouterProvider) {
        return new AppRouting($stateProvider, $urlRouterProvider);
    }

    /**
     * @returns {angular.ui.IState}
     */
    getHome() {
        return {
            name: 'home',
            url: '/',
            component: 'appHome',
            resolve: {
                $transition$: '$transition$'
            },
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "home.module" */ './home/home.module.js');
                return this.load($transition$, bundle.HomeModule);
            }
        }
    }

    /**
     * @returns {angular.ui.IState}
     */
    getPlanetasState() {
        return {
            name: 'planetas',
            url: '/planetas',
            component: 'appPlanetasLista',
            resolve: {
                $transition$: '$transition$'
            },
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "planetas.module" */ './planetas/planetas.module.js');
                return this.load($transition$, bundle.PlanetasModule);
            }
        }
    }

    /**
     * @returns {angular.ui.IState}
     */
    getPersonagensState() {
        return {
            name: 'personagens',
            url: '/personagens',
            component: 'appPersonagensLista',
            resolve: {
                $transition$: '$transition$'
            },
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "personagens.module" */ './personagens/personagens.module.js');
                return this.load($transition$, bundle.PersonagensModule);
            }
        }
    }

    /**
     * @returns {angular.ui.IState}
     */
    getWizardState() {
        return {
            name: 'wizard',
            url: '/wizard',
            component: 'appWizard',
            resolve: {
                $transition$: '$transition$'
            },
            lazyLoad: async ($transition$) => {
                const bundle = await import( /* webpackChunkName: "wizard.module" */ './wizard/wizard.module.js');
                return this.load($transition$, bundle.WizardModule);
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

    load($transition$, moduleToload) {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        return $ocLazyLoad.load(moduleToload);
    }
}

AppRouting.$inject = ['$stateProvider', '$urlRouterProvider'];