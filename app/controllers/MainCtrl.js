app.controller("MainCtrl", ["$scope", "$firebaseArray", "currentAuth", "$firebaseAuth", "Auth", function($scope, $firebaseArray, currentAuth, $firebaseAuth, Auth) {
	//Add Firebase Reference

   var pinsArray = new Firebase("https://nss-pinterested.firebaseio.com/");
    $scope.pins = $firebaseArray(pinsArray);
    console.log($scope.pins);

    $scope.searchText="";

}]);