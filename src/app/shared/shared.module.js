import angular from 'angular';

import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import toastr from 'angular-toastr';

export const SharedModule = angular.module('app.shared', [
    uiRouter,
    oclazyload,
    toastr
])