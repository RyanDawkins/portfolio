(function(){
    angular.module('PortfolioApp').controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', 'PostService'];

    function BlogController($scope, PostService) {

        var vm = this;

        vm.posts = [];

        vm.formatDate = formatDate;

        initialize();

        function initialize() {
            PostService.findAll()
                .success(function(data){
                    vm.posts = data;
                });
        }

        function formatDate(date_str) {
            var date = new Date(date_str);
            return date.toDateString();
        }

    }
})();