(function(){

    angular.module('PortfolioApp').factory('PostService', PostService);

    PostService.$inject = ['$http', 'AuthService'];

    function PostService($http, AuthService) {

        return {
            create: create,
            save: save,
            find: find,
            destroy: destroy,
            findAll: findAll
        };

        function create(post) {
            return $http({
                url: '/post/create',
                method: 'POST',
                data: post,
                headers: {
                    'Auth-Token': AuthService.getSession()
                }
            })
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
            return $http({
                url: '/post/'+id+'/delete',
                method: 'GET',
                headers: {
                    'Auth-Token': AuthService.getSession()
                }
                })
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