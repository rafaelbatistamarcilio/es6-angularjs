import * as template from './personagem-detalhe.component.html';

class PersonagemDetalheController {
    
    constructor() {
        this.titulo = 'Pesquisa de Personagens';
    }
    
    $onInit() {
    }
    
    escolher() {
        var dataEscolha = new Date();
        
        this.onPersonagemEscolhido({
            $event: {
                nome: this.personagem.name,
                data: dataEscolha
            }
        });
    }
}

export const PersonagemDetalheComponent = {
    template,
    controller: PersonagemDetalheController,
    bindings: {
        personagem: '<',
        onPersonagemEscolhido: '&',
    }
};