'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainView'
  });
}])

.controller('MainView', ['$scope', function($scope) {

  $scope.people = 
  [
   {

     "id": 1,
       "name":"fred",
       "surname": "Redwood",
       "sex": "male",
       "tier": "gold",
       "email": "fred@freedom.com"
   },
   {
      "id": 1,
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  },
  {
     "id": 1,
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  },
  {
    "id": 1,
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  },
  {
    "id": 1,
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  },
  {
      "id": "1",
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  },
  {
    "id": "1",
      "name":"fred",
      "surname": "Redwood",
      "sex": "male",
      "tier": "gold",
      "email": "fred@freedom.com"
  }
  ];
}])
;