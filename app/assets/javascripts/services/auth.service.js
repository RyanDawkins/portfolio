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

        function login(email, password) {
            return $http.get('/user/login?email='+encodeURIComponent(email)+'&password='+encodeURIComponent(password)
            ).success(function(data){
                console.debug(data);
                setSession(data.token);
            }).error(function(data){
                console.error(data);
            });
        }

        function logout() {
            localStorage.removeItem('STORAGE_KEY');
        }

        function isLoggedIn() {
            return !!getSession();
        }

        function setSession(token) {
            localStorage.setItem('STORAGE_KEY', token);
        }

        function getSession() {
            return localStorage.getItem('STORAGE_KEY')
        }

    }

})();