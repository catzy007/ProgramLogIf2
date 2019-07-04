function globalGetP(premis, key){
	var mark=0; var startStr=0; var endStr=premis.length;

	for(var i=0; i<premis.length; i++){
		for(var j=0; j<key.length; j++){
			if(premis.charAt(i+j) == key.charAt(j)){
				//console.log(premis.charAt(i+j) + ' ' + key.charAt(j) + ' ' + mark + ' ' + key.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				endStr = i;
			}
		}
	}
	return premis.slice(startStr, endStr);
}
