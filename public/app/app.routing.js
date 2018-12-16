(function () {
    'use strict';

    angular.module('app').config(AppRouting);
    AppRouting.$inject = ['$locationProvider', '$routeProvider'];

    function AppRouting($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');

      $routeProvider.
        when('/', {
          controller:'HomeController',
          controllerAs:'vm',
          templateUrl:'/views/home/home.html'
        }).
        when('/planetas', {
            controller:'PlanetasController',
            controllerAs:'vm',
            templateUrl:'/views/planetas/planetas-lista.html'
        }).
        when('/personagens', {
            template:'<app-personagens-lista><app-personagens-lista>'
        }).
        otherwise('/');
    }
  
})();