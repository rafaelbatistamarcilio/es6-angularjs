import * as template from './wizard-passo-3.component.html';

class WizardPasso3Controller {

    /** 
     * @param {angular.IRootScopeService} $rootScope 
     * @param {angular.toastr.IToastrService} toastr
     */
    constructor($rootScope, toastr) {
        this.$rootScope = $rootScope;
        this.toast = toastr;
        this.planeta = {};
        this.numero = 3;
    }

    $onInit() {
        this.$rootScope.$on(`WIZARD:PASSO:3:ABRIR`, ($event, dados) => this.abrir(dados));
        this.$rootScope.$on(`WIZARD:PASSO:3:SAIR`, ($event, dados) => this.sair(dados));
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
            this.toast.error('Dados não informados!', 'Erro');
        }
    }

    validar(dados) {
        if (dados.destino > this.numero) {
            this.validarProximo();
        }
    }

    validarProximo() {
        if (!this.planeta.solo) {
            throw Error('Dados inválidos');
        }
    }
}

WizardPasso3Controller.$inject = ['$rootScope', 'toastr'];
export const WizardPasso3Component = {
    template: template,
    controller: WizardPasso3Controller
}