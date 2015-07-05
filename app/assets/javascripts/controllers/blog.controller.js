(function(){
    angular.module('PortfolioApp').controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', 'PostService'];

    function BlogController($scope, PostService) {

        var vm = this;

        vm.posts = [];

        vm.toMarkdown = toMarkdown;

        initialize();

        function initialize() {
            PostService.findAll()
                .success(function(data){
                    vm.posts = data;
                });
        }

        function toMarkdown(str) {
            console.debug(str);
            console.debug(marked(str));
            return marked(str);
        }

    }
})();