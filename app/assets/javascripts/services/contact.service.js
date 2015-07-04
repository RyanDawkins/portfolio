(function(){

    angular.module('PortfolioApp').factory('ContactService', ContactService);

    ContactService.$inject = ['$http'];

    function ContactService($http) {

        return {
            compare: compare,
            create: create
        };

        function create(contactForm) {

            return $http.post({
                url: '/contact/create',
                data: contactForm
                })
                .success(function(data, status, headers, config){
                    console.log(data);
                })
                .error(function(data, status, headers, config) {
                    console.log(data);
                });

        }

        function find(id) {
            return $http.get("/post/"+id)
                .success(function(data, status, headers, config){
                    console.debug(data);
                })
                .error(function(data, status, headers, config){
                    console.error(data);
                });
        }

        function compare(a, b) {
            if(a.first_name !== b.first_name) {
                return false;
            }
            if(a.last_name !== b.last_name) {
                return false;
            }
            if(a.phone !== b.phone) {
                return false;
            }
            if(a.email !== b.email) {
                return false;
            }

            return true;
        }

    }

})();