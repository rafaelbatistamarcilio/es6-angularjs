import {
    environment
} from "../../environment";

export class PersonagensService {

    /**
     * @param {angular.IHttpService} $http
     */
    constructor($http) {
        this.$http = $http;
    }

    /**
     * @param {string} pagina
     * @return { {name:string}[] }
     */
    async recuperarPersonagens(pagina) {
        const response = await this.$http.get(`${environment.API.SW}/people/?page=${pagina}`);
        return response.data.results;
    }

    async pesquisar(nome) {
        const response = await this.$http.get(`${environment.API.SW}/people/?search=${nome}`);
        return response.data.results;
    }
}
PersonagensService.$inject = ['$http'];