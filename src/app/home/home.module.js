import angular from 'angular';
import { appHome } from './home.component';
import { SharedModule } from '../shared/shared.module';

export const HomeModule = angular.module('app.home', [SharedModule.name])
.component('appHome', appHome);
