(function(){

    angular.module('PortfolioApp').controller('NavController', NavController);

    NavController.$inject = ['$location', 'AuthService'];

    function NavController($location, AuthService) {

        var vm = this;

        vm.showLogoutBtn = showLogoutBtn;

        function showLogoutBtn() {
            return AuthService.isLoggedIn() && /\/admin\/*/.test($location.path());
        }

    }

})();