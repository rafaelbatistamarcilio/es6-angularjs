import angular from 'angular';
import { SharedModule } from '../shared/shared.module';
import { PlanetasListaComponent } from './planetas-lista/planetas-lista.component';
import { PlanetaDetalheComponent } from './planeta-detalhe/planeta-detalhe.component';
import { PlanetasService } from './planetas.service';


export const PlanetasModule = angular.module('app.planetas',[SharedModule.name])
.component('appPlanetasLista', PlanetasListaComponent)
.component('appPlanetaDetalhe', PlanetaDetalheComponent)
.service('PlanetasService', PlanetasService);