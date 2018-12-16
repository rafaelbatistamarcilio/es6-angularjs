(function () {
    'use strict';
    angular.module('app').config(AppRouting);
    AppRouting.$inject = ['$stateProvider'];

    function AppRouting($stateProvider) {
     
        var home = {
            name: 'home',
            url: '/home',
            controller:'HomeController as vm',
            templateUrl: '/views/home/home.html',
            lazyLoad: function ($transition$) {
                return $transition$.injector().get('$ocLazyLoad').load('./app/controllers/home.controller.js');
            }
        }

        var planetas = {
            name: 'planetas',
            url: '/planetas',
            controller:'PlanetasController as vm',
            templateUrl: '/views/planetas/planetas-lista.html',
            lazyLoad: function ($transition$) {
                $transition$.injector().get('$ocLazyLoad').load('./app/controllers/planetas.controller.js');
                $transition$.injector().get('$ocLazyLoad').load('./app/directives/planeta/planeta.directive.js');
                return $transition$.injector().get('$ocLazyLoad').load('./app/services/planetas.service.js');
            }
        }

        var personagens = {
            name: 'personagens',
            url: '/personagens',
            component: 'appPersonagensLista',
            lazyLoad: function ($transition$) {
                $transition$.injector().get('$ocLazyLoad').load('./app/services/personagens.service.js');
                $transition$.injector().get('$ocLazyLoad').load('./app/components/personagens/personagem-detalhe/personagem-detalhe.component.js');
                return $transition$.injector().get('$ocLazyLoad').load('./app/components/personagens/personagens-lista/personagens-lista.component.js');
            }
        }

        $stateProvider.state(home);
        $stateProvider.state(planetas);
        $stateProvider.state(personagens);
    }
})();