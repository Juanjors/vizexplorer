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
    $scope.orderBy = orderBy;
    let orderedObjects = {
      name: false,
      surname: false,
      sex: false,
      tier: false,
      email: false
    };
    let lastTr = undefined;

    function orderBy(param){
      debugger;
      if(!orderedObjects[param]){
        $scope.players.sort(function(pl1, pl2){
          pl1[param] = pl1[param].toLowerCase();
          pl2[param] = pl2[param].toLowerCase();
          if(pl1[param] < pl2[param]) return -1;
          if(pl1[param] > pl2[param]) return 1;
          return 0;
      });
      orderedObjects[param] = true;
      }else{
        $scope.players.sort(function(pl1, pl2){
          pl1[param] = pl1[param].toLowerCase();
          pl2[param] = pl2[param].toLowerCase();
          if(pl1[param] < pl2[param]) return 1;
          if(pl1[param] > pl2[param]) return -1;
        });
        orderedObjects[param] = false;
      }
      //Using the param of orderBy as object property you can order things pretty fast
   
    }
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