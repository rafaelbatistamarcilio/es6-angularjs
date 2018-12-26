export class PlanetasService {

    constructor($http){
        this.$http = $http;
    }

    async recuperarPlanetas(pagina) {
        const response = await this.$http({
            url: 'https://swapi.co/api/planets/?page='+pagina,
            method: 'GET'
        });

        return response.data.results;
    }

    async pesquisar(nome) {
        const response = await this.$http({
            url: 'https://swapi.co/api/planets/?search='+nome,
            method: 'GET'
        });
        return response.data.results;
    }
}

PlanetasService.$inject = ['$http'];