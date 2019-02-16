import { environment } from "../../environment";

export class PlanetasService {

    /** @param {angular.IHttpService} $http */
    constructor($http){
        this.$http = $http;
    }

    async recuperarPlanetas(pagina) {
        const response = await this.$http({
            url: `${environment.API.SW}/planets/?page=${pagina}`,
            method: 'GET'
        });

        return response.data.results;
    }

    async pesquisar(nome) {
        const response = await this.$http({
            url: `${environment.API.SW}/planets/?search=${nome}`,
            method: 'GET'
        });
        return response.data.results;
    }
}

PlanetasService.$inject = ['$http'];