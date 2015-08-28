var app = angular.module("Pinterested", ["angular.filter", "ngRoute", "firebase"]);

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