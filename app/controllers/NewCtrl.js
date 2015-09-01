app.controller("NewCtrl", ["$scope", "$firebaseArray", "$http", "currentAuth", "$firebaseAuth", "$location", function($scope, $firebaseArray, $http, currentAuth, $firebaseAuth, $location){
  var uid = currentAuth.uid;

  var ref = new Firebase("https://nss-pinterested.firebaseio.com/pins");
  var boardRef = new Firebase("https://nss-pinterested.firebaseio.com/" + uid);

  $scope.pins = $firebaseArray(ref);
  $scope.boards = $firebaseArray(boardRef.child("boards"));
  $scope.uid = uid;
  $scope.url = "";
  $scope.description = "";
  $scope.boardSelect = "";

  var user = currentAuth;

  $scope.name = user.facebook.displayName;
  $scope.profile_pic = user.facebook.profileImageURL;

  //Use diffbot to scan entered url for images
  $scope.getImages = function() {
    console.log('click');
    console.log("http://api.diffbot.com/v3/image?token=48ce59bfa898f11da63f9b42132c8b6f&url=http%3A%2F%2F" + $scope.url);
    $http.get("http://api.diffbot.com/v3/image?token=48ce59bfa898f11da63f9b42132c8b6f&url=" + encodeURIComponent($scope.url))
    .success(function(response) {
      console.log('response',response);
      //if response has no images (error)
      if (response.error) {
        $(".load-6").hide();
        $("#errorMessage").show();
      //otherwise show the first four images
      } else {
        $scope.images = response.objects.slice(0,4);
        $(".load-6").hide();
        $(".imageOption").show();
      }
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
    $("#addPin").prop("disabled",false);
  }; 

  $scope.addPin = function() {
    $scope.pins.$add({
      url: $scope.url,
      description: $scope.description,
      image: $scope.image,
      board: $scope.boardSelect.title,
      uid: uid,
      user_name: $scope.name,
      profile_pic: $scope.profile_pic
    });
    $location.path("#/board/"+ $scope.uid + "/" + $scope.boardSelect.title).replace();
    $scope.$apply();
    $scope.url = "";
    $scope.description = "";
    $scope.boardSelect = "";
    $(".imageOption").hide();
    $(".load-6").show();
    $("#addPin").prop("disabled","disabled");
    $('#myModal').modal('toggle');
  }; 

  $scope.reset = function() {
    $(".imageOption").hide();
    $(".load-6").show();
    $("#errorMessage").hide();
    $("#addPin").prop("disabled","disabled");
  }

}]);