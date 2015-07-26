/**
 * Created by ryan on 7/21/15.
 */
(function(){

    angular.module('PortfolioApp').controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location', 'AuthService'];

    function LogoutController($location, AuthService) {
        AuthService.logout();
        $location.path('/login');
    }

})();