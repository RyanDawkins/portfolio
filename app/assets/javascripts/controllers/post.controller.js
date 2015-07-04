(function(){

    angular.module('PortfolioApp').controller('PostController', PostController);

    PostController.$inject = ['$scope', '$routeParams', '$window', 'PostService'];

    function PostController($scope, $routeParams, $window, PostService) {

        var vm = this;

        vm.post = {};
        vm.isCreateMode = !$routeParams['id'];

        vm.create = create;
        vm.save = save;
        vm.find = find;
        vm.destroy = destroy;

        initialize();

        function initialize() {
            if(!vm.isCreateMode) {
                find($routeParams['id']);
            }
        }

        function create() {
            PostService.create(vm.post)
                .success(function(data){
                    $window.location.href = '/#/admin/post/'+data.id+"/update";
                });
        }

        function save(post) {
            PostService.save(post);
        }

        function find(id) {
            PostService.find(id)
                .success(function(data){
                    vm.post = data;
                })
                .error(function(data){

                });
        }

        function destroy() {
            PostService.destroy(vm.post.id)
                .success(function(data){
                    $window.location.href = "/#/admin/blog";
                })
                .error(function(data){
                });
        }

    }


})();
