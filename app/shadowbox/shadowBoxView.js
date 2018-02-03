'use strict';

angular.module('myApp.shadowBoxView', ['ui.bootstrap'])

.controller('shadowBoxView', ['$scope', 'shadowBoxService', function($scope, shadowBoxService) {
    $scope.hideForm = hideForm;


    function hideForm(){
        shadowBoxService.getShadowBoxInstance().close();
      }

}]);