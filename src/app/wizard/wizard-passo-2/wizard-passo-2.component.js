import * as template from './wizard-passo-2.component.html';

class WizardPasso2Controller {

    /** 
     * @param {angular.IRootScopeService} $rootScope 
     * @param {angular.toastr.IToastrService} toastr
     */
    constructor($rootScope, toastr) {
        this.$rootScope = $rootScope;
        this.toast = toastr;
        this.planeta = {};
        this.passo = 2;
    }

    $onInit() {
        this.$rootScope.$on(`WIZARD:PASSO:2:ABRIR`, ($event, dados) => this.abrir(dados));
        this.$rootScope.$on(`WIZARD:PASSO:2:SAIR`, ($event, dados) => this.sair(dados));
    }

    abrir(dados) {
        this.planeta = dados.planeta ? dados.planeta : {};
    }

    sair(dados) {
        try {
            this.validar(dados)
            dados.planeta = this.planeta;
            this.$rootScope.$emit(`WIZARD:ABRIR`, dados)
        } catch (error) {
            this.toast.error(error.message, 'Erro');
        }
    }

    validar(dados) {
        if (dados.destino > this.passo) {
            this.validarProximo();
        }
    }

    validarProximo() {
        if (!this.planeta.clima) {
            throw new Error('Dados não informados!');
        }
    }
}

WizardPasso2Controller.$inject = ['$rootScope', 'toastr'];
export const WizardPasso2Component = { template, controller: WizardPasso2Controller }