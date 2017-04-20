angular.module('app').filter('cfCRC', function($cacheFactory){
	var filterCache = $cacheFactory('cfCRC');
    return function(input) {
    	if(!(input && angular.isString(input) && input.trim().length>=15)){
    		return;
    	}
    	var cacheKey 	= input.trim().substr(0,15).toUpperCase(),
			cachedData 	= filterCache.get(cacheKey);

		if(cachedData){
			return cachedData;
		}


		const EVEN_VALUES = {
			"A" : 0,
			"0" : 0, 
			"F" : 5, 
			"5" : 5, 
			"K" : 10, 
			"P" : 15, 
			"U" : 20,
			"B" : 1, 
			"1" : 1,
			"G" : 6, 
			"6" : 6,
			"L" : 11, 
			"Q" : 16, 
			"V" : 21,
			"C" : 2, 
			"2" : 2,
			"H" : 7, 
			"7" : 7, 
			"M" : 12, 
			"R" : 17, 
			"W" : 22,
			"D" : 3, 
			"3" : 3,
			"I" : 8, 
			"8" : 8,
			"N" : 13, 
			"S" : 18, 
			"X" : 23,
			"E" : 4, 
			"4" : 4, 
			"J" : 9, 
			"9" : 9, 
			"O" : 14, 
			"T" : 19, 
			"Y" : 24,
			"Z" : 25
		};

		const ODD_VALUES = {
			"A" : 1,
			"0" : 1,
			"F" : 13,
			"5" : 13,
			"K" : 2,
			"P" : 3,
			"U" : 16,
			"B" : 0,
			"1" : 0,
			"G" : 15,
			"6" : 15,
			"L" : 4,
			"Q" : 6,
			"V" : 10,
			"C" : 5,
			"2" : 5,
			"H" : 17,
			"7" : 17,
			"M" : 18,
			"R" : 8,
			"W" : 22,
			"D" : 7,
			"3" : 7,
			"I" : 19,
			"8" : 19,
			"N" : 20,
			"S" : 12,
			"X" : 25,
			"E" : 9,
			"4" : 9,
			"J" : 21,
			"9" : 21,
			"O" : 11,
			"T" : 14,
			"Y" : 24,
			"Z" : 23
		};

		function checkDigit(v){
			return String.fromCharCode(65+v);
		}
		
		var out = checkDigit(cacheKey.split("").map(function(c,i){
					return !(i%2)?ODD_VALUES[c]:EVEN_VALUES[c];
				}).reduce(function(p,c){
					return p+c;
				})%26);
		filterCache.put(cacheKey, out);
      	return out;
    }
});