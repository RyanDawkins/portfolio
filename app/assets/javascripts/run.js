/**
 * Created by ryan on 7/21/15.
 */
(function(){

    angular.module('PortfolioApp').run(RunBlock);

    RunBlock.$inject = ['$location', 'AuthService'];

    function RunBlock($location, AuthService) {
        // Write redirect code.
        if(/\/admin\/*/.test($location.path()) && !AuthService.isLoggedIn()) {
            $location.path('/login');
        }

    }

})();