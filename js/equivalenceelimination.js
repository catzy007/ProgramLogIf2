	function equElim(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;

		//hapus kata 'jika' pada 'premis 2'
		premis2 = globalRemover(premis2, 'jika ');
		
		var premis2q = globalGetQ(premis2,' maka ');
		var premis2p = globalGetP(premis2,' maka ');

		if(globalValidator(premis1, ' jika dan hanya jika ')	//'premis 1' harus berupa 'jika dan hanya jika'
			&& globalValidator(premis2, ' maka ')				//'premis 2' harus berupa 'maka'
			&& (globalGetP(premis1, ' jika dan hanya jika ') == globalGetP(premis2, ' maka ') //'premis 1 P' harus sama dengan 'premis 2 P'
			&& globalGetQ(premis1, ' jika dan hanya jika ') == globalGetQ(premis2, ' maka ')) //'premis 1 Q' harus sama dengan 'premis 2 Q'
		){
			document.getElementById("konklusi").innerHTML = 'jika ' + premis2q + ' maka ' + premis2p;
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
