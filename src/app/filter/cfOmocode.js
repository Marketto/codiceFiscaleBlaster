angular.module('app').filter('cfOmocode', function($cacheFactory){
	var filterCache = $cacheFactory('cfOmocode');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length==16)){
    		return;
    	}
    	var cacheKey 	= input.trim().toUpperCase(),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}

		function convertOmocode(str){
			const OMOCODE_MAP = ["L","M","N","P","Q","R","S","T","U","V"];
			return ((str||"").split("")||[]).map(function(c){
					var k = OMOCODE_MAP.indexOf(c); 
					return k>=0?k:c;
				}).join("");
		}
		
		var out = cacheKey.substr(0,6) + 
				convertOmocode(cacheKey.substr(6,2)) + 
				cacheKey.substr(8,1) + 
				convertOmocode(cacheKey.substr(9,2)) + 
				cacheKey.substr(11,1) + 
				convertOmocode(cacheKey.substr(12,3)) +  
				cacheKey.substr(15,1);
		filterCache.put(cacheKey, out);
      	return out;
    }
});