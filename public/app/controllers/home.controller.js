(function () {
    'use strict';
    angular.module('app').controller('HomeController', HomeController);
    HomeController.$inject = ['$location'];

    function HomeController($location) {
        var vm = this;
        vm.$location = $location;
        vm.titulo = 'Bem vindo';

        vm.$onInit = $onInit;
        vm.planetas = planetas;
        vm.personagens = personagens;

        function $onInit() {
            console.log('TESTE');
        }

        function planetas() {
            vm.$location.path('planetas');
        }

        function personagens() {
            vm.$location.path('personagens');
        }
    }
})();