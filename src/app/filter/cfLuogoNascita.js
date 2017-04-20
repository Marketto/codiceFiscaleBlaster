angular.module('app').filter('cfLuogoNascita', function($cacheFactory){
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=15)){
    		return;
    	}
    	return input.trim().substr(11,4);
    }
});