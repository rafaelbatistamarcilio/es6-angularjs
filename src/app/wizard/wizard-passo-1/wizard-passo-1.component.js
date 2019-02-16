import * as template from './wizard-passo-1.component.html';

class WizardPasso1Controller {

    /** 
     * @param {angular.IRootScopeService} $rootScope 
     * @param {angular.toastr.IToastrService} toastr
     */
    constructor($rootScope, toastr) {
        this.$rootScope = $rootScope;
        this.toast = toastr;
        this.passo = 1;
        this.planeta = {};
    }

    $onInit() {
        this.$rootScope.$on(`WIZARD:PASSO:1:ABRIR`, ($event, dados) => this.abrir(dados));
        this.$rootScope.$on(`WIZARD:PASSO:1:SAIR`, ($event, dados) => this.sair(dados));
    }

    abrir(dados) {
        this.planeta = dados.planeta ? dados.planeta : {};
    }

    sair(dados) {
        try {
            this.validar(dados);
            dados.planeta = this.planeta;
            this.$rootScope.$emit(`WIZARD:ABRIR`, dados);
        } catch (error) {
            this.toast.error(error.message, 'Erro');
        }
    }

    validar(dados) {
        if (dados.destino >= this.passo) {
            return this.validarProximo();
        }

        dados.destino = 1;
        throw new Error('Operação inválida!');
    }

    validarProximo() {
        if (!this.planeta.nome) {
            throw new Error('Dados não informados!');
        }
    }
}

WizardPasso1Controller.$inject = ['$rootScope', 'toastr'];
export const WizardPasso1Component = { template, controller: WizardPasso1Controller }