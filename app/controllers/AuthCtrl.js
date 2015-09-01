app.controller("AuthCtrl", ["$scope", "$location", function($scope, $location) {
  var ref = new Firebase("https://nss-pinterested.firebaseio.com");

  $scope.facebookLogin = function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.authData = authData;
        $location.path("#/").replace();
        $scope.$apply()
      }
    });
  }
}]);