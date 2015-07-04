(function(){

    angular.module('PortfolioApp').controller('AdminBlogController', AdminBlogController);

    AdminBlogController.$inject = ['$scope', 'PostService', 'AuthService'];

    function AdminBlogController($scope, PostService) {

        var vm = this;

        vm.posts = [];

        vm.shorten = shorten;

        initalize();

        function initalize() {
            loadPosts();
        }

        function loadPosts() {
            PostService.findAll()
                .success(function(data){
                    vm.posts = data;
                });
        }

        function shorten(str) {
            return str.substring(0, 50);
        }

    }

})();