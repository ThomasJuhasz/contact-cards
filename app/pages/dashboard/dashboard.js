(function () {
    'use strict';

    angular.module('myApp')
        .controller('thjDashboardController', ['repository', thjDashboardController])
        .component('dashboard', {
            templateUrl: './app/pages/dashboard/dashboard.html',
            controller: 'thjDashboardController',
            controllerAs: 'vm'
        });

    function thjDashboardController(repository) {
        var vm = this;

        repository.getUsers().then(function(response) {
            vm.users = response.data;
        });

        repository.getUser(4).then(function(response) {
            vm.user = response.data;
        });

        vm.onSelectUser = function(user) {
            vm.selectedUser = user;
        };
    }
})();