import angular from 'angular';

import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

export const AppModule = angular.module('app', [ SharedModule.name ])
.component('appMain', AppComponent)
.config(['$stateProvider', '$urlRouterProvider', AppRouting.forRoot]);