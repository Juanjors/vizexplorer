'use strict';

angular.module('myApp.tableview', ['ngRoute'])

.component('tableview', {
  controller: function ($scope, playersService) {
    playersService.getPlayersList(function (players){
      playersService.setPlayersList(players);
      //makes sense so the list updates when a player is added.
      playersService.getPlayersList(function(players){
        $scope.players = players.data;
      });
    });
    $scope.selectPerson = selectPerson;
    let lastTr = undefined;

    //Make a person being active in the table.
    function selectPerson(event){
      const classBlue = 'blue-background';
      //Get element clicked and wrap it with JQlite
      let tr = angular.element(event.currentTarget);
 
      //Remove color of the last active element if exists
      if(lastTr){
        lastTr.removeClass(classBlue);
      }
      //Add 'active' class
      tr.addClass(classBlue);
      //Save reference to last active tr.
      lastTr = tr;
      
    }
  },
  bindings: {
    data: '='
  },
  templateUrl: 'table/tableview.html',
});;