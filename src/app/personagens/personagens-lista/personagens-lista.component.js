import * as template from './personagens-lista.component.html';

class PersonagensListaController {

    constructor(PersonagensService, $scope) {
        this.titulo = 'Pesquisa de Personagens';
        this.personagens = [];
        this.escolhido = '';
        this.personagensService = PersonagensService;
        this.$scope = $scope;
    }

    $onInit() {
        this.recuperarPersonagens();
    }

    async recuperarPersonagens() {
        const response = await this.personagensService.recuperarPersonagens(1);
        this.personagens = response;
        this.$scope.$digest();
    }

    async pesquisarPersonagem() {
        this.personagens = [];
        const response = await this.personagensService.pesquisar(this.pesquisa);
        this.personagens = response;
        this.$scope.$digest();
    }

    mostrarEscolha(event) {
        this.escolhido = event.nome;
    }
}

PersonagensListaController.$inject = ['PersonagensService', '$scope'];
export const PersonagensListaComponent = { template, controller: PersonagensListaController };