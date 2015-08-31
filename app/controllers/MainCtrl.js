app.controller("MainCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseAuth", "Auth", "$location", function($scope, $firebaseArray, currentAuth, $firebaseAuth, Auth, $location) {
	//Add Firebase Reference

   var pinsArray = new Firebase("https://nss-pinterested.firebaseio.com/pins/");
    $scope.pins = $firebaseArray(pinsArray);
    console.log($scope.pins);

    console.log(currentAuth);

    $scope.searchText="";
    $scope.userName=currentAuth.facebook.displayName;
    $scope.uid=currentAuth.uid;
    $scope.profilePhoto = currentAuth.facebook.profileImageURL;

    // Defining newPin Variables

    $scope.newPinDesc = "";
    $scope.newImg = "";
    $scope.newUrl = "";

        //Go

$scope.go = function ( path ) {
  $location.path( path );
};

$scope.getBoards = function () {
  
  var boardsArray = new Firebase("https://nss-pinterested.firebaseio.com/" + $scope.uid + "/boards");
  $scope.userBoards = $firebaseArray(boardsArray);
  console.log($scope.userBoards);

};

$scope.getPin = function (pin) {
  $scope.newPinDesc = pin.description;
  $scope.newImg = pin.image;
  $scope.newUrl=pin.url;
  $scope.getBoards();
  }
  
}]);