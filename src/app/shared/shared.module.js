import angular from 'angular';

import 'angular-ui-router';
import 'oclazyload';

export const SharedModule = angular.module('app.shared', [
    'ui.router',
    'oc.lazyLoad',
])