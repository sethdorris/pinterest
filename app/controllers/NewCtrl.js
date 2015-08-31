app.controller("NewCtrl", ["$scope", "$firebaseArray", "$http", "currentAuth", "$firebaseAuth", function($scope, $firebaseArray, $http, currentAuth, $firebaseAuth){
  var ref = new Firebase("https://nss-pinterested.firebaseio.com/");

  $scope.pins = $firebaseArray(ref);

  $scope.url = "";

  $scope.description = "";

  var user = currentAuth;

  console.log(user);

  $scope.name = user.facebook.displayName;
  $scope.profile_pic = user.facebook.profileImageURL;

  console.log($scope.name);

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

  $scope.idSelectedImage = null;

  $scope.setSelected = function($index, url) {
    console.log('click');
    console.log($index);
    $scope.image = url;
    $scope.idSelectedImage = $index;
  }; 

  $scope.addPin = function() {
    $scope.pins.$add({
      url: "http://" + $scope.url,
      description: $scope.description,
      image: $scope.image,
      user_name: $scope.name,
      profile_pic: $scope.profile_pic
    });
    $scope.url = "";
    $scope.description = "";
  }; 

}]);