app.controller("BoardCtrl", ["$scope", "$routeParams","$firebaseArray", "currentAuth", "$firebaseObject", function($scope, $routeParams, $firebaseArray, currentAuth, $firebaseObject){
  var pinRef = new Firebase("https://nss-pinterested.firebaseio.com/pins");

  var uid = currentAuth.uid;

  $scope.pins = $firebaseArray(pinRef.orderByChild("uid").equalTo(uid));

  $scope.board = $routeParams.board;

}]);