(function () {
    'use strict';
    
    angular.module('app').component('appPersonagensLista', {
        templateUrl: '/app/components/personagens/personagens-lista/personagens-lista.component.html',
        controller: PersonagensListaComponent
    });
    PersonagensListaComponent.$inject = ['PersonagensService'];

    function PersonagensListaComponent(PersonagensService) {
        var vm = this;
        vm.titulo = 'Pesquisa de Personagens';
        vm.personagens = [];
        vm.escolhido = '';
        
        vm.$onInit = $onInit;
        vm.mostrarEscolha = mostrarEscolha;
        vm.recuperarPersonagens = recuperarPersonagens;
        vm.pesquisarPersonagem = pesquisarPersonagem;
        
        /** métodos */
        function $onInit() {
            console.log('PersonagensListaComponent');
            vm.recuperarPersonagens();
        }
        
        function recuperarPersonagens() {
            var promise = PersonagensService.recuperarPersonagens(1);
            
            promise.then( function(response) { vm.personagens = response.data;});
        }

        function pesquisarPersonagem() {
            vm.personagens = [];
            var promise = PersonagensService.pesquisar( vm.pesquisa );
            promise.then( function(response){ vm.personagens = response.data; });
        }
        
        function mostrarEscolha(event){
            vm.escolhido = event.nome;
        }
    }
    
})();