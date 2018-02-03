'use strict';

angular.module('myApp.shadowbox', ['ui.bootstrap'])

.component('shadowbox', {
  controller: function ($scope, $uibModal, shadowBoxService) {
      var modalInstance = undefined;
      $scope.showForm = showForm;
  

      function showForm(){
          modalInstance = $uibModal.open({
          animation: false,
          templateUrl: 'shadowbox/shadowBoxView.html',
          backdrop: false,
          controller: 'shadowBoxView',
          resolve: {
            items: function () {
              return $scope;
            }
          }
        }
        );
        shadowBoxService.setShadowBoxInstance(modalInstance);
      }


  
  },
  bindings: {
    data: '='
  },
  templateUrl: 'shadowbox/shadowbox.html',
});;