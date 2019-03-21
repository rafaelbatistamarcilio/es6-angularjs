
import * as angular from 'angular';

import "core-js/stable";
import "regenerator-runtime/runtime";

import './styles.css';

import {AppModule} from './app/app.module';

angular.element(document).ready( ()=> angular.bootstrap(document, [AppModule.name]) );
