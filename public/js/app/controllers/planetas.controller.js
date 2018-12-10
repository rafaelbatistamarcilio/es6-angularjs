(function () {
    'use strict';
    
    function PlanetasController(PlanetasService) {
        var vm = this;
        vm.titulo = 'Pesquisa de Planetas do Star Wars';
        vm.planetas = [];
        vm.nome ='';

        vm.$onInit = onInit;
        vm.recuperarPlanetas = recuperarPlanetas;
        vm.pesquisarPlaneta = pesquisarPlaneta;

        /** métodos */
        function onInit() {
            vm.recuperarPlanetas();
        }
        
        function recuperarPlanetas() {
            var promise = PlanetasService.recuperarPlanetas(1);
            promise.then( function(response){ vm.planetas = response.data; });
        }

        function pesquisarPlaneta() {
            vm.planetas = [];
            var promise = PlanetasService.pesquisar( vm.planeta );
            promise.then( function(response){ vm.planetas = response.data; });
        }

    }

    angular.module('app').controller('PlanetasController', PlanetasController);
    PlanetasController.$inject = ['PlanetasService'];
})();