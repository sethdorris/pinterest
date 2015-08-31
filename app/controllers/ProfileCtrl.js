app.controller("ProfileCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseAuth", function($scope, $firebaseArray, currentAuth, $firebaseObject){
  var uid = currentAuth.uid;  

  var userRef = new Firebase("https://nss-pinterested.firebaseio.com/" + uid);

  $scope.boards = $firebaseArray(userRef.child("boards"));

  $scope.boardsNumber = $scope.boards.length;

  $scope.userName = currentAuth.facebook.displayName;
  $scope.profilePicture = currentAuth.facebook.profileImageURL;
  $scope.newBoard = ""

  $scope.addBoard = function() {
    $scope.boards.$add($scope.newBoard);
    $scope.newBoard = "";
  }
}]);