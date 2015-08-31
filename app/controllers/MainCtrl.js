app.controller("MainCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseAuth", "Auth", "$location", function($scope, $firebaseArray, currentAuth, $firebaseAuth, Auth, $location) {
	//Add Firebase Reference

   var pinsArray = new Firebase("https://nss-pinterested.firebaseio.com/pins/");
    $scope.pins = $firebaseArray(pinsArray);
    console.log($scope.pins);


        //Go

$scope.go = function ( path ) {
  $location.path( path );
};




}]);