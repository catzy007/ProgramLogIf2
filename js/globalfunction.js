//fungsi ini berguna untuk mendapatkan 'Left String' pada 'str input' yang dipisahkan oleh 'key'
function globalGetLeft(str, key){
	var mark=0; var startStr=0; var endStr=str.length;

	for(var i=0; i<str.length; i++){
		for(var j=0; j<key.length; j++){
			if(str.charAt(i+j) == key.charAt(j)){
				//console.log(str.charAt(i+j) + ' ' + key.charAt(j) + ' ' + mark + ' ' + key.length);
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
	return str.slice(startStr, endStr);
}

//fungsi ini berguna untuk mendapatkan 'Right String' pada 'str input' yang dipisahkan oleh 'key'
function globalGetRight(str, key){
	var mark=0; var startStr=0; var endStr=str.length;

	for(var i=0; i<str.length; i++){
		for(var j=0; j<key.length; j++){
			if(str.charAt(i+j) == key.charAt(j)){
				//console.log(str.charAt(i+j) + ' ' + key.charAt(j) + ' ' + mark + ' ' + key.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				startStr = i + key.length;
			}
		}
	}
	return str.slice(startStr, endStr);
}

//fungsi ini berguna untuk menentukan apakah 'key' ada dalam 'str input'
//jika ada maka 'return true' jika tidak ada maka 'return false'
function globalValidator(str, key){
	var mark=0;
	
	for(var i=0; i<str.length; i++){
		for(var j=0; j<key.length; j++){
			if(str.charAt(i+j) == key.charAt(j)){
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				return true;
			}
		}
	}
	return false;
}

//fungsi ini berguna untuk menghapus 'key' pada 'str input'
function globalRemover(str, key){
	var mark=0; var startStr=0; var endStr=str.length;
	var result;
	
	for(var i=0; i<str.length; i++){
		for(var j=0; j<key.length; j++){
			if(str.charAt(i+j) == key.charAt(j)){
				//console.log(strQ.charAt(i+j) + ' ' + key1.charAt(j) + ' ' + mark + ' ' + key1.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				endStr=i;
			}
		}
	}
	result = str.slice(0, endStr);
	return result + str.slice(endStr + key.length, str.length);
}
