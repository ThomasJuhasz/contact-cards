(function () {
    'use strict';

    angular
      .module('myApp')
      .factory('repository', ['$http', repository]);

    function repository($http) {
        var publicMethods = {
            getUser: getUser,
            getUsers: getUsers
        };

        function getUser(id) {
            return $http.get('http://localhost:8080/api/user', {
                id: id
            });
        }

        function getUsers() {
            return $http.get('http://localhost:8080/api/users');
        }

        return publicMethods;
    }
})();