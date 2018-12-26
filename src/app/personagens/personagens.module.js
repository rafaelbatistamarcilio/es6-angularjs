import angular from 'angular';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { PersonagensService } from './personagens.service';
import { SharedModule } from '../shared/shared.module';

export const PersonagensModule = angular.module('app.personagens',[SharedModule.name])
.component('appPersonagensLista', PersonagensListaComponent)
.component('appPersonagemDetalhe', PersonagemDetalheComponent)
.service('PersonagensService', PersonagensService);