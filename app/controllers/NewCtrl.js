app.controller("MainCtrl", ["$scope", "$firebaseArray", "$http" function($scope, $firebaseArray, $http){
  var ref = new Firebase("https://nss-pinterested.firebaseio.com/");

  $scope.pins = $firebaseArray(ref);

  $scope.url = "";

  $scope.description = "";

  $scope.addPin = function() {
    $http.get("http://api.diffbot.com/v3/image?token=48ce59bfa898f11da63f9b42132c8b6f&url=" + $scope.url)
    .success(function(response) {
      $scope.image = response.objects[0].url;
      $scope.pins.$add({
        url: $scope.url,
        description: $scope.description,
        image: $scope.image
      });
    }).error(function(error) {
      console.log(error);
    });
  };

  

}]);