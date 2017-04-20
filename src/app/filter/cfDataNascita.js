angular.module('app').filter('cfDataNascita', function($cacheFactory){
	var filterCache = $cacheFactory('cfDataNascita');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=11)){
    		return;
    	}
    	var cacheKey 	= input.trim().substr(6,5).toUpperCase(),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}

		const MONTH_MAP = ["A","B","C","D","E","H","L","M","P","R","S","T"];

		if(isNaN(cacheKey.substr(0,2))||isNaN(cacheKey.substr(-2)) || MONTH_MAP.indexOf(cacheKey.substr(2,1))<0){
			return;
		}
		
		var out = new Date();
		out.setFullYear(parseInt(cacheKey.substr(0,2)));
		out.setMonth(parseInt(MONTH_MAP.indexOf(cacheKey.substr(2,1))));
		out.setDate(parseInt(cacheKey.substr(-2)));
		filterCache.put(cacheKey, out);
      	return out;
    }
});