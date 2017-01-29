(function () {
    'use strict';

    angular.module('myApp')
        .controller('thjTopContactsController', ['repository', thjTopContactsController])
        .component('thjTopContacts', {
            templateUrl: './app/components/thj-top-contacts/thj-top-contacts.html',
            controller: 'thjTopContactsController',
            controllerAs: 'vm',
            bindings: {
                thjLimit: '<',
                thjOnSelect: '&?'
            }
        });

    function thjTopContactsController(repository) {
        var vm = this;

        vm.$onInit = function() {            
            repository.getUsers().then(function(response) {
                vm.users = response.data.slice(0, vm.thjLimit || 5);
            });
        };

        vm.onClick = function(user) {            
            vm.thjOnSelect && vm.thjOnSelect({user: user});
        }
    }
})();