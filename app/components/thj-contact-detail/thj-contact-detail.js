(function () {
    'use strict';

    angular.module('myApp')
        .controller('thjContactDetailController', [thjContactDetailController])
        .component('thjContactDetail', {
            templateUrl: './app/components/thj-contact-detail/thj-contact-detail.html',
            controller: 'thjContactDetailController',
            controllerAs: 'vm',
            bindings: {
                thjContact: '<'
            }
        });

    function thjContactDetailController() {
        
    }
})();