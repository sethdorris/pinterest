var app = angular.module("Pinterested", ["ngRoute", "firebase"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/feed.html',
    controller: 'MainCtrl'
  }).when('/new', {
    templateUrl: 'partials/new.html',
    controller: 'NewCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);