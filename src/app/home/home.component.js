import * as template from './home.component.html';

class HomeComponent {

    constructor($location) {
        this.$location = $location;
        this.titulo = 'Bem vindo';
    }

    $onInit() {
    }

    planetas() {
        this.$location.path('planetas');
    }

    personagens() {
        this.$location.path('personagens');
    }

    wizard() {
        this.$location.path('wizard');
    }
}

HomeComponent.$inject = ['$location'];
const appHome =  {
    template: template,
    controller: HomeComponent
};

export {appHome};
