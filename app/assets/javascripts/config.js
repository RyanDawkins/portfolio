(function(){

    angular.module('PortfolioApp').config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm'
                })
                .when('/blog', {
                    templateUrl: 'partials/blog.html',
                    controller: 'BlogController',
                    controllerAs: 'vm'
                })
                .when('/admin/blog', {
                    templateUrl: 'partials/admin/blog.html',
                    controller: 'AdminBlogController',
                    controllerAs: 'vm'
                })
                .when('/admin/post/create', {
                    templateUrl: 'partials/admin/post.html',
                    controller: 'PostAdminController',
                    controllerAs: 'vm'
                })
                .when('/admin/post/:id/update', {
                    templateUrl: 'partials/admin/post.html',
                    controller: 'PostAdminController',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .when('/logout', {
                    controller: 'LogoutController',
                    templateUrl: 'partials/login.html'
                });
        }]);
})();