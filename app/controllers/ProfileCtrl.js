//User's profile
//Displays boards, number of boards, number of pins, allows user to add new board

app.controller("ProfileCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseObject", function($scope, $firebaseArray, currentAuth, $firebaseObject){
  var uid = currentAuth.uid;  
  $scope.uid = uid;
  var userRef = new Firebase("https://nss-pinterested.firebaseio.com/" + uid);
  var pinRef = new Firebase("https://nss-pinterested.firebaseio.com/pins");

  $scope.pins = $firebaseArray(pinRef.orderByChild("uid").equalTo(uid));

  $scope.boards = $firebaseArray(userRef.child("boards"));

  $scope.boards.$loaded().then(function() {
    $scope.boardsNumber = $scope.boards.length;
    $scope.pinsNumber = $scope.pins.length;
  });
  

  $scope.userName = currentAuth.facebook.displayName;
  $scope.profilePicture = currentAuth.facebook.profileImageURL;
  $scope.newBoard = "";

  $scope.addBoard = function() {
    console.log($scope.newBoard);
    $scope.boards.$add({
      title: $scope.newBoard
    });
  };

}]);