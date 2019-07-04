//fungsi ini berguna untuk mencari output yang sesuai dari input
function myParser(str){
	if(KuantorCek(str) !== '0x000') { //============================ jika input berupa kuantor (semua x, beberapa x)
		return KuantorCek(str);
	}else if(PenghubungCek(str) !== '0x000') { //=================== jika input berupa (maka, dan, atau, hanya)
		return PenghubungCek(str);
	}else{ //======================================================= misal (budi bapak ani --- bapak(budi,ani))
		return BuatPredikat(str);
	}
}

//fungsi ini berguna untuk mengubah input menjadi kuantor (jika valid)
function KuantorCek(str){
	var output;
	if(globalValidator(str,'semua ') //============================= jika input terdapat kata [semua, setiap, tidak ada] (kuantor umum)
	|| globalValidator(str,'setiap ') 
	|| globalValidator(str,'tidak ada ')){
		output = globalGetRight(str,'semua '); //=================== ambil variabel di sebelah kuantor
		output = globalGetRight(output,'setiap ');
		output = globalGetRight(output,'tidak ada ');
		output = globalRemover(output,' dimana');
		output = globalRemover(output,' yang');
		return '\u2200' + output + '.'; //========================== return special character + variabel
	}else if(globalValidator(str,'beberapa ') //==================== jika input terdapat kata [beberapa, paling sedikit, ada] (kuantor khusus)
	|| globalValidator(str,'paling sedikit ')
	|| globalValidator(str,'ada ')){
		output = globalGetRight(str,'beberapa '); //================ ambil variabel di sebelah kanan kuantor
		output = globalGetRight(output,'paling sedikit ');
		output = globalGetRight(output,'ada satu ');
		output = globalGetRight(output,'ada ');
		output = globalRemover(output,' dimana');
		output = globalRemover(output,' yang');
		return '\u2203' + output + '.'; //========================== return special character + variabel
	}
	return '0x000'; //============================================== return 0x000 jika tidak valid
}

//fungsi ini berguna untuk menubah str input menjadi karakter penghubung (jika valid)
function PenghubungCek(str){
	if(globalValidator(str,'maka') //=============================== jika input berupa maka
	&& str.length === 'maka'.length){
		return '\u2192';
	}else if(globalValidator(str,'dan') //========================== jika input berupa dan
	&& str.length === 'dan'.length){
		return '\u2227';
	}else if(globalValidator(str,'atau') //========================= jika input berupa atau
	&& str.length === 'atau'.length){
		return '\u2228';
	}else if(globalValidator(str,'jika dan hanya jika')){ //======== jika input berupa bikondisi
		return '\u2194';
	}
	return '0x000'; //============================================== return 0x000 jika tidak valid
}

//fungsi ini berguna untuk mengubah str input menjadi kalimat atom
function BuatPredikat(str){ //====================================== misal (budi bapak ani --- bapak(budi, ani)
	str = globalRemover(str,' adalah'); //========================== hilangkan kata adalah pada str
	str = globalRemover(str,' dari'); //============================ hilangkan kata dari pada str
	str = globalRemover(str,' jika'); //============================ hilangkan kata jika pada str
	str = globalRemover(str,'jika ');
	var output = '';
	//============================================================== jika kata mengandung negasi
	if(globalValidator(str,' tidak') 
	|| globalValidator(str,' bukan') 
	|| globalValidator(str,' tidak benar')){
		str = globalRemover(str, " tidak");
		str = globalRemover(str, " bukan");
		str = globalRemover(str, " tidak benar");
		output += '\u00AC'; //====================================== tambahkan karakter negasi
	}
	//============================================================== ubah kalimat menjadi array of kata	
	var array = str.split('\ '); 
	if(array.length > 1){ //======================================== jika kata lebih dari satu
		output += array[1] + '(' + array[0]; //===================== output = predikat(term1, term2, ... )
		for(var i=2; i<array.length; i++){
			output += ',' + array[i];
		}
		output += ')';
		return output;
	}
}
