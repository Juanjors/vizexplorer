'use strict';

angular.module('myApp.playersService', ['ui.bootstrap'])

.factory('playersService', function($http) {
   let playerList = undefined; 
    let returnObj = {
        setPlayersList: setPlayersList,
        getPlayersList: getPlayersList,
        addNewPlayer: addNewPlayer
    }
    function setPlayersList(list){
        playerList = list;
    }
    function getPlayersList(callback){
        debugger;
        if(playerList === undefined){
            $http.get("main/players.json").then(callback);
        }else{
            callback(playerList);
        }

    }

    function addNewPlayer(player){
        playerList.data.push(player);
    }


    return returnObj;

    
}
);