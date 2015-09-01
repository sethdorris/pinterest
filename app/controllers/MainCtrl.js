app.controller("MainCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseAuth", "Auth", "$location", function($scope, $firebaseArray, currentAuth, $firebaseAuth, Auth, $location) {
  //Add Firebase Reference

   var pinsArray = new Firebase("https://nss-pinterested.firebaseio.com/pins/");

    $scope.pins = $firebaseArray(pinsArray);

    $scope.searchText="";
    $scope.userName=currentAuth.facebook.displayName;
    $scope.uid=currentAuth.uid;
    $scope.profilePhoto = currentAuth.facebook.profileImageURL;
    console.log(currentAuth.uid)
    // Defining newPin Variables

    $scope.newPinDesc = "";
    $scope.newImg = "";
    $scope.newUrl = "";
    $scope.boardSelect = "";
        //Go

$scope.go = function ( path ) {
  $location.path( path );
};

$scope.addPinToBoard = function() {
console.log($scope.boardSelect);
    console.log($scope.boardSelect);
    var firebaseRef = new Firebase("https://nss-pinterested.firebaseio.com/pins");
   $scope.pinned = $firebaseArray(firebaseRef);
   
   $scope.pinned.$add({
      url: $scope.newUrl,
      description: $scope.newPinDesc,
      image: $scope.newImg,
      board: $scope.boardSelect.title,
      uid: $scope.uid,
      user_name: $scope.userName,
      profile_pic: $scope.profilePhoto
    });


};

$scope.getBoards = function () {
  
  var boardsArray = new Firebase("https://nss-pinterested.firebaseio.com/" + $scope.uid + "/boards");
  $scope.userBoards = $firebaseArray(boardsArray);


};

$scope.getPin = function (pin) {
  $scope.newPinDesc = pin.description;
  $scope.newImg = pin.image;
  $scope.newUrl=pin.url;
  $scope.getBoards();
  }
  
}]);