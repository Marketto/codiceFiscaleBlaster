angular.module('app').filter('cfSesso', function($cacheFactory){
	var filterCache = $cacheFactory('cfSesso');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=11)){
    		return;
    	}
    	var cacheKey 	= input.trim().substr(9,2),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}else if(isNaN(cacheKey)){
			return;
		}
		
		var parsedDay = parseInt(cacheKey);
		var out = null;
		if(parsedDay>0 && parsedDay<32){
			out = "maschio";
		}else if(parsedDay>40 && parsedDay<72){
			out = "femmina";
		}else {
			return;
		}
		filterCache.put(cacheKey, out);
      	return out;
    }
});