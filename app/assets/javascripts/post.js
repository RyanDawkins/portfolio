app.controller("PostController", ["$scope", function($scope){

  // I think this is irrelevant but I feel like it makes sense to
  // declare it anyways.
  $scope.post = {};

  // This is the function we will use to just start blowing stuff up.
  $scope.save = function(post) {
    console.log(post);
  };

}]);
