(function(){

    angular.module('PortfolioApp').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'AuthService'];

    function LoginController($scope, $location, AuthService) {

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
                    $location.path('/admin/blog').replace();
                })
                .error(function(data){
                });
        }

    }

})();