(function(){

    angular.module('PortfolioApp').config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm'
                })
                .when('/admin/blog', {
                    templateUrl: 'partials/blog.html',
                    controller: 'AdminBlogController',
                    controllerAs: 'vm'
                })
                .when('/admin/post/create', {
                    templateUrl: 'partials/post.html',
                    controller: 'PostAdminController',
                    controllerAs: 'vm'
                })
                .when('/admin/post/:id/update', {
                    templateUrl: 'partials/post.html',
                    controller: 'PostAdminController',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                });
        }]);

})();