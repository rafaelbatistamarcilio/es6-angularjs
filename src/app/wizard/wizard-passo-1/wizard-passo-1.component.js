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
        return this.planeta.nome !== undefined;
    }
}

WizardPasso1Controller.$inject = ['$rootScope', 'toastr'];
export const WizardPasso1Component = {
    template: template,
    controller: WizardPasso1Controller
}