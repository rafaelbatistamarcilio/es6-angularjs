(()=> {
    'use strict';

    class AppRouting {

        constructor($stateProvider) {
            this.$stateProvider = $stateProvider;
            this.setStates();
        }

        static config($stateProvider) {
            return new AppRouting($stateProvider);
        }

        getHome() {
            return {
                name: 'home',
                url: '/',
                controller: 'HomeController as vm',
                templateUrl: '/views/home/home.html',
                lazyLoad: ($transition$)=> {
                    return $transition$.injector().get('$ocLazyLoad').load('./app/controllers/home.controller.js');
                }
            }
        }

        getPlanetasState() {
            return {
                name: 'planetas',
                url: '/planetas',
                controller: 'PlanetasController as vm',
                templateUrl: '/views/planetas/planetas-lista.html',
                lazyLoad: ($transition$)=> {
                    $transition$.injector().get('$ocLazyLoad').load('./app/controllers/planetas.controller.js');
                    $transition$.injector().get('$ocLazyLoad').load('./app/directives/planeta/planeta.directive.js');
                    return $transition$.injector().get('$ocLazyLoad').load('./app/services/planetas.service.js');
                }
            }
        }

        getPersonagensState() {
            return {
                name: 'personagens',
                url: '/personagens',
                component: 'appPersonagensLista',
                lazyLoad: ($transition$)=> {
                    $transition$.injector().get('$ocLazyLoad').load('./app/services/personagens.service.js');
                    $transition$.injector().get('$ocLazyLoad').load('./app/components/personagens/personagem-detalhe/personagem-detalhe.component.js');
                    return $transition$.injector().get('$ocLazyLoad').load('./app/components/personagens/personagens-lista/personagens-lista.component.js');
                }
            }
        }

        setStates() {
            this.$stateProvider.state(this.getHome());
            this.$stateProvider.state(this.getPlanetasState());
            this.$stateProvider.state(this.getPersonagensState());
        }
    }

    AppRouting.$inject = ['$stateProvider'];
    angular.module('app').config(AppRouting.config);
})();