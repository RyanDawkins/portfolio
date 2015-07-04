(function(){

    angular.module('PortfolioApp').controller('IndexController', SiteController);

    SiteController.$inject = ['$scope', '$http', '$anchorScroll', '$location', 'ContactService'];

    function SiteController($scope, $http, $anchorScroll, $location, ContactService){

        var vm = this;

        vm.contactForm = {};
        vm.lastForm = {};

        vm.scroll = scroll;
        vm.submitContact = submitContact;

        function scroll(hash) {
            $('html,body').animate({scrollTop: $('#'+hash).offset().top},'slow');
        }

        function submitContact() {

            if(ContactService.compare(vm.contactForm, vm.lastForm)) {

                $('#contact-warning').show('slow');
                setTimeout(function(){
                    $('#contact-warning').hide('slow');
                },5000);

                return;
            }

            ContactService.create(vm.contactForm)
                .success(function(data, status, headers, config){
                    $('#contact-success').show('slow');
                    setTimeout(function(){
                        $('#contact-success').hide('slow');
                    }, 5000);
                    vm.lastForm = vm.contactForm;
                })
                .error(function(data, status, headers, config){
                    $('#contact-error').show('slow');
                    setTimeout(function(){
                        $('#contact-error').hide('slow');
                    });
                });

        }

    }

})();