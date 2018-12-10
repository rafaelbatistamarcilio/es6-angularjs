(function () {
    'use strict';

    function PlanetasService($http) {

        function recuperarPlanetas(pagina) {
            return $http({
                url: '/api/planetas/'+pagina,
                method: 'GET'
            });
        }

        function pesquisar(nome) {
            return $http({
                url: '/api/planetas/search/'+nome,
                method: 'GET'
            });
        }

        return {
            recuperarPlanetas: recuperarPlanetas,
            pesquisar : pesquisar
        };

    }

    angular.module('app').service('PlanetasService', PlanetasService);
    PlanetasService.$inject = ['$http'];
})();