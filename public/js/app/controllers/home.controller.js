(function () {
    'use strict';
    angular.module('app').controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.titulo = 'Bem vindo';

        vm.irParaPaginaDeProdutos = irParaPaginaDeProdutos;
        vm.$onInit = onInit;

        function irParaPaginaDeProdutos() {
            window.location.href = '/views/planetas/planetas-lista.html';
        }

        function onInit() {
            console.log('TESTE');
            
        }
    }

})();