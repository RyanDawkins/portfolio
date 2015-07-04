(function(){

    angular.module('PortfolioApp').controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', 'PostService'];

    function BlogController($scope, PostService) {

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