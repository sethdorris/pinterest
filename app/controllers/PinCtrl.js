app.controller("PinCtrl", ["$scope", "$firebaseArray", "$http", function($scope, $firebaseArray, $http){
  var ref = new Firebase("https://nss-pinterested.firebaseio.com/");

  $scope.pins = $firebaseArray(ref);

  console.log($scope.pins);


}
