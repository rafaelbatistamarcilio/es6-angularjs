import * as template from './planetas-lista.component.html';

class PlanetasListaController {

    constructor(PlanetasService, $scope){
        this.planetasService = PlanetasService;
        this.titulo = 'Pesquisa de Planetas do Star Wars';
        this.planetas = [];
        this.nome ='';
        this.$scope = $scope;
    }
    
    $onInit() {
        this.recuperarPlanetas();
    }
    
    async recuperarPlanetas() {
        const response = await this.planetasService.recuperarPlanetas(1);
        this.planetas = response;
        this.$scope.$digest();
    }
    
    async pesquisarPlaneta() {
        this.planetas = [];
        const response = await this.planetasService.pesquisar( this.busca );
        this.planetas = response;
        this.$scope.$digest();
    }
    
}

PlanetasListaController.$inject = ['PlanetasService','$scope'];
export const PlanetasListaComponent = {
    template,
    controller: PlanetasListaController
};