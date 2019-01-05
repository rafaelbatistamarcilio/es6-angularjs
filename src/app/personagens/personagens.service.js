import { environment } from "../../environment";

export class PersonagensService {
    
    constructor($http){
        this.$http= $http;
    }
    
    async recuperarPersonagens(pagina) {
        const response = await  this.$http({
            url: `${environment.API.SW}/people/?page=${pagina}`,
            method: 'GET'
        });

        return response.data.results;
    }
    
    async pesquisar(nome) {
        const response = await   this.$http({
            url: `${environment.API.SW}/people/?search=${nome}`,
            method: 'GET'
        });
    
        return response.data.results;
    }
}
PersonagensService.$inject = ['$http'];
    
    