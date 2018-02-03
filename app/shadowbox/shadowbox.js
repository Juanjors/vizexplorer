'use strict';

angular.module('myApp.shadowbox', ['ui.bootstrap'])

.component('shadowbox', {
  controller: function ($scope, $uibModal) {
      var modalInstance = undefined;
      $scope.showForm = showForm;
      $scope.hideForm = hideForm;


      function showForm(){
          modalInstance = $uibModal.open({
          animation: false,
          templateUrl: 'shadowbox/shadowBoxView.html',
          backdrop: false,
          resolve: {
            items: function () {
              return undefined;
            }
          }
        }
        );
      }

      function hideForm(){
        modalInstance.close();
      }

  },
  bindings: {
    data: '='
  },
  templateUrl: 'shadowbox/shadowbox.html',
});;