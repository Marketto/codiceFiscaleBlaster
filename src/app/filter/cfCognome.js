angular.module('app').filter('cfCognome', function($cacheFactory){
	var filterCache = $cacheFactory('cfCognome');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=3)){
    		return;
    	}
    	var cacheKey 	= input.trim().substr(0,3).toLowerCase(),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}
		
		var out = cacheKey.split("").join("°")+"°";
		filterCache.put(cacheKey, out);
      	return out;
    }
});