(function () {
    'use strict';

    angular.module('app').service('PersonagensService', PersonagensService);
    PersonagensService.$inject = ['$http'];

    function PersonagensService($http) {

        function recuperarPersonagens(pagina) {
            return $http({
                url: '/api/personagens/' + pagina,
                method: 'GET'
            });
        }

        function pesquisar(nome) {
            return $http({
                url: '/api/personagens/search/' + nome,
                method: 'GET'
            });
        }

        return {
            recuperarPersonagens: recuperarPersonagens,
            pesquisar: pesquisar
        };

    }
})();