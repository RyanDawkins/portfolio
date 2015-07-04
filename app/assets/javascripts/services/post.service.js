(function(){

    angular.module('PortfolioApp').factory('PostService', PostService);

    PostService.$inject = ['$http'];

    function PostService($http) {

        return {
            create: create,
            save: save,
            find: find,
            destroy: destroy,
            findAll: findAll
        };

        function create(post) {
            return $http.post('/post/create', post)
                .success(function(data, status, headers, config){
                    console.debug(data);
                })
                .error(function(data, status, headers, config){
                    console.error(data);
                });
        }

        function save(post){
            console.debug(post);
        }

        function find(id) {
            return $http.get('/post/'+id)
                .success(function(data, status, headers, config){
                    console.debug(data);
                })
                .error(function(data, status, headers, config){
                    console.error(data);
                });
        }

        function destroy(id) {
            return $http.get('/post/'+id+'/delete')
                .success(function(data, status, headers, config){
                    console.debug(data);
                })
                .error(function(data, status, headers, config){
                    console.error(data);
                });
        }

        function findAll() {
            return $http.get('/post')
                .success(function(data, status, headers, config){
                    console.debug(data);
                })
                .error(function(data, status, headers, config){
                   console.error(data);
                });
        }

    }

})();