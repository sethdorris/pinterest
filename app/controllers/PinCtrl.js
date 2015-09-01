app.controller("PinCtrl", ["$scope", "$firebaseArray", "$http", "currentAuth", function($scope, $firebaseArray, $http, currentAuth){
  var uid = currentAuth.uid;

  $scope.userName = currentAuth.facebook.displayName;

  var ref = new Firebase("https://nss-pinterested.firebaseio.com/pins");

  $scope.pins = $firebaseArray(ref.orderByChild("uid").equalTo(uid));

}]);
