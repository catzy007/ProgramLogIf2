	function siloHipotesis(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'p' pada 'premis 1' lalu hapus kata 'jika'
		var premis1p = globalRemover(globalGetP(premis1, ' maka '), 'jika ');
		//ambil 'q' pada 'premis 1'
		var premis1q = globalGetQ(premis1, ' maka ');
		
		//ambil 'p' pada 'premis 2' lalu hapus kata 'jika'
		var premis2p = globalRemover(globalGetP(premis2, ' maka '), 'jika ');
		//ambil 'q' pada 'premis 2'
		var premis2q = globalGetQ(premis2, ' maka ');

		//jika 'premis 1 Q' sama dengan 'premis 2 P'
		if(premis1q == premis2p){
			document.getElementById("konklusi").innerHTML = 'jika ' + premis1p + ' maka ' + premis2q;
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
