(function(){

    angular.module('PortfolioApp').factory('AuthService', AuthService);

    AuthService.$inject = ['$http'];

    function AuthService($http) {

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getSession: getSession
        };

        function login() {
        }

        function logout() {

        }

        function isLoggedIn() {

        }

        function getSession() {
            return localStorage.getItem('STORAGE_KEY')
        }

    }

});