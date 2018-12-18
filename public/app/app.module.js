(()=> {
    'use strict';

    angular.module('app', [
        'ui.router',
        'oc.lazyLoad',
        'app.directives'
    ]);
    angular.element(document).ready( ()=> angular.bootstrap(document, ['app']) );
})();