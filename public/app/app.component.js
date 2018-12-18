(()=> {
    'use strict';

    class AppComponent {
        /** métodos */
        $onInit() {
            console.log('APP component');
        }
    }

    AppComponent.$inject = [];
    angular.module('app').component('appMain', {
        templateUrl: '/app/app.component.html',
        controller: AppComponent,
    });
})();