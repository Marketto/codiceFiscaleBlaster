angular.module('app').filter('cfNome', function($cacheFactory){
	var filterCache = $cacheFactory('cfNome');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=6)){
    		return;
    	}
    	var cacheKey 	= input.trim().substr(3,3).toLowerCase(),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}
		
		var out = cacheKey.substr(0,2).split("").join("°")+"§°"+input.substr(-1)+"°";
		filterCache.put(cacheKey, out);
      	return out;
    }
});