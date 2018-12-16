(function () {
    'use strict';

    /**
     * @desc diretiva de planeta que pode ser usada em qualquer lugar de aplicativo 
     * @example <app-planeta nome="'Marte'" clima="Seco" terreno="'Arenoso'"></app-planeta>
     */
    angular.module('app.directives').directive('appPlaneta', appPlanetaDirective);

    function appPlanetaDirective() {
        return {
            restrict: 'E',
            scope: {
                dados: '=planeta'
            },
            templateUrl: '/app/directives/planeta/planeta.directive.html',
            controller: PlanetaDirectiveController,
            controllerAs: 'vm'
        };
    }

    PlanetaDirectiveController.$inject = ['$scope'];
    function PlanetaDirectiveController($scope) {
        var vm = this;
        vm.$onInit = $onInit;
        vm.planeta = $scope.dados;

        /** métodos */
        function $onInit() {
            console.log('PlanetaDirectiveController : ' + vm.planeta.name);
        }
    }
})();