	function modusPonens(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'p' pada 'premis 1' lalu hapus kata 'jika'
		var premis1p = globalRemover(globalGetP(premis1, ' maka '), 'jika ');
		
		//console.log(premis1p); //debug_line_can_be_removed
		
		//'premis 1' harus berupa maka
		//'premis 1 P' harus sama dengan 'premis 2'
		if(globalValidator(premis1, ' maka ') && premis1p == premis2){
			document.getElementById("konklusi").innerHTML = globalGetQ(premis1, ' maka ');
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
