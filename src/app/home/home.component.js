import * as template from './home.component.html';

class HomeComponent {

    constructor($location) {
        this.$location = $location;
        this.titulo = 'Bem vindo';
    }

    $onInit() {
        const teste = 'TESTE';
        console.log(teste);
    }

    planetas() {
        this.$location.path('planetas');
    }

    personagens() {
        this.$location.path('personagens');
    }
}

HomeComponent.$inject = ['$location'];
const appHome =  {
    template: template,
    controller: HomeComponent
};

export {appHome};
