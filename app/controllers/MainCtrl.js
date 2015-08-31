app.controller("MainCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) { 
    var pinsArray = new Firebase("https://nss-pinterested.firebaseio.com/");
    $scope.pins = $firebaseArray(pinsArray);
    console.log($scope.pins);

}]);