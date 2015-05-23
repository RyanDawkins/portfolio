app.controller("IndexController", ["$scope", '$http', '$anchorScroll', '$location', function($scope, $http, $anchorScroll, $location){

    $scope.contactForm = {};
    $scope.lastForm = {};

    $scope.scroll = function(hash) {
        $('html,body').animate({scrollTop: $("#"+hash).offset().top},'slow');
    };

    var compareContacts = function(a, b) {
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
    };

    $scope.submitContact = function() {

        if(compareContacts($scope.contactForm, $scope.lastForm)) {

            $("#contact-warning").show("slow");
            setTimeout(function(){
                $("#contact-warning").hide("slow");
            },5000);

            return;
        }

        $http.post("/contact/create", $scope.contactForm)
            .success(function(data, status, headers, config){
                console.log(data);
                $("#contact-success").show('slow');
                setTimeout(function(){
                    $("#contact-success").hide('slow');
                }, 5000);
                $scope.lastForm = $scope.contactForm;
            })
            .error(function(data, status, headers, config) {

                $("#contact-error").show("slow");
                setTimeout(function(){
                    $("#contact-error").hide("slow");
                });

                console.log(data);
            });
    }

}]);