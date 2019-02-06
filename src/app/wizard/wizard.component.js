import * as template from './wizard.component.html';

class WizardController {

    /** @param {angular.IRootScopeService} $rootScope  */
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    $onInit() {
        this.$rootScope.$on('WIZARD:ABRIR', ($event, dados) => this.abrirPasso(dados));
        this.abrirPasso({destino:1});
    }

    abrirPasso(dados) {
        this.passoAtual = dados.destino;
        this.$rootScope.$emit(`WIZARD:PASSO:${dados.destino}:ABRIR`, dados);
    }

    proximo() {
        const dados = { atual: this.passoAtual, destino: this.passoAtual + 1};
        this.$rootScope.$emit(`WIZARD:PASSO:${this.passoAtual}:SAIR`, dados );
    }

    anterior() {
        const dados = { atual: this.passoAtual, destino: this.passoAtual - 1};
        this.$rootScope.$emit(`WIZARD:PASSO:${this.passoAtual}:SAIR`, dados);
    }

    isAtual(passo){
        return this.passoAtual === passo;
    }
}

WizardController.$inject = ['$rootScope'];
export const WizardComponent = { template, controller: WizardController }