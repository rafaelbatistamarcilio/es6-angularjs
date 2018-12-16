(function () {
    'use strict';

    angular.module('app').component('appPersonagemDetalhe', {
        templateUrl: '/app/components/personagens/personagem-detalhe/personagem-detalhe.component.html',
        controller: PersonagemDetalheComponent,
        bindings: {
            personagem: '<',
            onPersonagemEscolhido: '&',
        }
    });

    PersonagemDetalheComponent.$inject = [];

    function PersonagemDetalheComponent() {
        var vm = this;
        vm.titulo = 'Pesquisa de Personagens';

        vm.$onInit = $onInit;
        vm.escolher = escolher;

        /** métodos */
        function $onInit() {
            console.log('PersonagemDetalheComponent');
        }

        function escolher() {
            var dataEscolha = new Date();        
            
            /** exemplo de output */
            vm.onPersonagemEscolhido({$event: { nome: vm.personagem.name , data: dataEscolha }});
        }
    }
})();