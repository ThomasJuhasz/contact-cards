(function () {
    'use strict';

    angular.module('myApp')
        .controller('thjContactCardController', [thjContactCardController])
        .component('thjContactCard', {
            templateUrl: './app/components/thj-contact-card/thj-contact-card.html',
            controller: 'thjContactCardController',
            controllerAs: 'vm',
            bindings: {
                thjData: '<'
            }
        });

    function thjContactCardController() {
        var vm = this;
    }
})();