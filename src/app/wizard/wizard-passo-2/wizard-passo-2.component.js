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
        console.log(dados);
        this.planeta = dados.planeta ? dados.planeta : {};
    }

    sair(dados) {
        if (this.validar(dados)) {
            dados.planeta = this.planeta;
            this.$rootScope.$emit(`WIZARD:ABRIR`, dados)
        } else {
            this.toast.error('Dados não informados!', 'Erro');
        }
    }

    validar(dados) {
        if (dados.destino > this.passo) {
            return this.validarProximo();
        }

        return true;
    }

    validarProximo() {
        return this.planeta.clima !== undefined;
    }
}

WizardPasso2Controller.$inject = ['$rootScope', 'toastr'];
export const WizardPasso2Component = {
    template: template,
    controller: WizardPasso2Controller
}