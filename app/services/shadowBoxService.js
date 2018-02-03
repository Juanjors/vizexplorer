'use strict';

angular.module('myApp.shadowBoxService', ['ui.bootstrap'])

.factory('shadowBoxService', function() {
    let shadowBoxInstance = undefined;
    let returnObj = {
        setShadowBoxInstance: setShadowBoxInstance,
        getShadowBoxInstance: getShadowBoxInstance
    }
    function setShadowBoxInstance(instance){
        shadowBoxInstance = instance;
    }
    function getShadowBoxInstance(){
        return shadowBoxInstance;
    }

    return returnObj;
});