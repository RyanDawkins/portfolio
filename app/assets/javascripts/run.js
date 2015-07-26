/**
 * Created by ryan on 7/21/15.
 */
(function(){

    angular.module('PortfolioApp').run(RunBlock);

    RunBlock.$inject = ['$rootScope', '$location', 'AuthService'];

    function RunBlock($rootScope, $location, AuthService) {

        $rootScope.$on('$routeChangeStart', function(next, current) {
            filter();
        });

        function filter() {
            // Write redirect code.
            if(/\/admin\/*/.test($location.path()) && !AuthService.isLoggedIn()) {
                $location.path('/login').replace();
            }
        }

    }

})();