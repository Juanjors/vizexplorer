'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.tableview',
  'myApp.shadowbox',
  'myApp.shadowBoxView',
  'myApp.shadowBoxService'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
