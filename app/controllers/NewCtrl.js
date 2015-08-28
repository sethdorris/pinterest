app.controller("NewCtrl", ["$scope", "$firebaseArray", "$http", function($scope, $firebaseArray, $http){
  var ref = new Firebase("https://nss-pinterested.firebaseio.com/");

  $scope.pins = $firebaseArray(ref);

  $scope.url = "";

  $scope.description = "";

  $scope.getImages = function() {
    console.log('click');
    console.log("http://api.diffbot.com/v3/image?token=48ce59bfa898f11da63f9b42132c8b6f&url=http%3A%2F%2F" + $scope.url);
    $http.get("http://api.diffbot.com/v3/image?token=48ce59bfa898f11da63f9b42132c8b6f&url=http%3A%2F%2F" + $scope.url)
    .success(function(response) {
      console.log('response',response);
      $scope.images = response.objects.slice(0,4);
    }).error(function(error) {
      console.log(error);
    });
  };

  $scope.getImage = function(image, url) {
    console.log('click');
    $scope.image = url;
  }; 

  $scope.addPin = function() {
    $scope.pins.$add({
      url: $scope.url,
      description: $scope.description,
      image: $scope.image
    });
  }; 

}]);