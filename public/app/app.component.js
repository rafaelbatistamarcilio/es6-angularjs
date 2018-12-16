(function () {
    'use strict';

    angular.module('app').component('appMain', {
        templateUrl: '/app/app.component.html',
        controller: AppComponent,
    });

    AppComponent.$inject = [];

    function AppComponent() {
        var vm = this;
        vm.$onInit = $onInit;

        /** métodos */
        function $onInit() {}
    }
})();