	//fungsi utama modustollens
	function modusTollens(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'p' pada 'premis 1' lalu hapus kata 'jika'
		var premis1p = globalRemover(globalGetP(premis1, ' maka '), 'jika ');
		
		//ambil 'q' pada 'premis 1'
		var premis1q = globalGetQ(premis1, ' maka ');
		
		//hapus kata 'tidak' atau 'tidak benar' pada 'premis 2' 
		var premis2x = globalRemover(premis2, 'tidak benar ');
		var premis2x = globalRemover(premis2x, 'tidak ');
		
		//hapus kata 'tidak' atau 'tidak benar' pada 'premis 1 q'
		var premis1qx = globalRemover(premis1q, 'tidak benar ');
		var premis1qx = globalRemover(premis1qx, 'tidak ');

		if(globalValidator(premis1, ' maka ')	//'premis 1 Q' harus berupa 'maka'
			&& premis1q != premis2				//'premis 1 Q' tak boleh sama degan 'premis 2'
			&& premis1qx == premis2x			//'premis 1 Q' yang telah diproses harus sama dengan 'premis 2' yang telah diproses
		){
			//jika 'premis 1 Q' mengandung kata 'tidak' dan 'premis 2' mengandung kata 'tidak'
			if(globalValidator(premis1q, 'tidak ') && globalValidator(premis2, 'tidak ')){
				document.getElementById("konklusi").innerHTML = "Tidak Valid!";
			}else{
				document.getElementById("konklusi").innerHTML = 'tidak benar ' + premis1p;
			}
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
