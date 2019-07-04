	function siloDisjungtif(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'p' dan 'q' pada 'premis 1'
		var premis1p = globalGetP(premis1, ' atau ');
		var premis1q = globalGetQ(premis1, ' atau ');
		
		//hilangkan 'tidak' dan 'tidak benar' pada 'premis 2'
		var premis2x = globalRemover(premis2, 'tidak benar ');
		var premis2x = globalRemover(premis2x, 'tidak ');
		
		//hilangkan 'tidak' dan 'tidak benar' pada 'premis 1 p'
		var premis1px = globalRemover(premis1p, 'tidak benar ');
		var premis1px = globalRemover(premis1px, 'tidak ');
		
		//hilangkan 'tidak' dan 'tidak benar' pada 'premis 1 q'
		var premis1qx = globalRemover(premis1q, 'tidak benar ');
		var premis1qx = globalRemover(premis1qx, 'tidak ');

		//'premis 1' harus berupa 'atau'
		//'premis 1 P' harus sama dengan 'premis 2'
		//'premis 1 P' dan 'premis 1 Q' tak boleh sama degan 'premis 2'
		//'premis 1 P' dan 'premis 1 Q' yang telah diproses harus sama dengan 'premis 2' yang telah diproses
		if(globalValidator(premis1, ' atau ') && premis1p != premis2 && premis1px == premis2x){
			document.getElementById("konklusi").innerHTML = globalGetQ(premis1, ' atau ');
		}else if(globalValidator(premis1, ' atau ') && premis1q != premis2 && premis1qx == premis2x){
			document.getElementById("konklusi").innerHTML = globalGetP(premis1, ' atau ');
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
