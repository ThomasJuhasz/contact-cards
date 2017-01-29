(function() {
    'use strict';

    angular.module('myApp', ['ui.router'])
    
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("dashboard");
    
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                template: "<dashboard />"
            });
    }]);
})();