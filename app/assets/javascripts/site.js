app.controller("IndexController", ["$scope", '$anchorScroll', '$location', function($scope, $anchorScroll, $location){

  $scope.scroll = function(hash) {
    $('html,body').animate({scrollTop: $("#"+hash).offset().top},'slow');
  };

}]);