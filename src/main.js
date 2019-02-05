
import * as angular from 'angular';

import '@babel/polyfill';

import './styles.css';

import {AppModule} from './app/app.module';

angular.element(document).ready( ()=> angular.bootstrap(document, [AppModule.name]) );
