(function(){

    angular.module('PortfolioApp').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'AuthService'];

    function LoginController($scope, AuthService) {

        var vm = this;

        vm.loginForm = {
            email: "",
            password: ""
        };

        vm.login = login;

        function login() {
            var email = vm.loginForm.email;
            var password = vm.loginForm.password;
            AuthService.login(email, password)
                .success(function(data){
                })
                .error(function(data){
                });
        }

    }

})();