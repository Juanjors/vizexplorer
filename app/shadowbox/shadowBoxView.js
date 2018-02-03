'use strict';

angular.module('myApp.shadowBoxView', ['ui.bootstrap'])

.controller('shadowBoxView', ['$scope', 'shadowBoxService', 'playersService', 
function($scope, shadowBoxService, playersService) {
    $scope.hideForm = hideForm;
    $scope.submitForm = submitForm;

    function hideForm(){
        shadowBoxService.getShadowBoxInstance().close();
    }

    function submitForm(){
        //Call to service palyer an,d add the new user.
        if($scope.user.name)
            playersService.addNewPlayer($scope.user);
        hideForm();
    }

}]);