

	function setMission1() {
  			
  		const pre = document.getElementById('obstacle');

  		var code = "flag,0,9\n";
		
	 	pre.innerHTML = code;
	}

	function setMission2() {
  			
		const pre = document.getElementById('obstacle');

		var code = "flag,-12,12\nflag,-12,-12\nflag,12,12\nflag,12,-12";
	  
	   pre.innerHTML = code;
  }

  function setMission3() {
  			
	const pre = document.getElementById('obstacle');

	var code = "flag,-9,5\nbox,-3,13\nbox,-3,11\nbox,-3,9\nbox,-3,7\nbox,-3,6\nbox,-3,4\nbox,-3,2\nflag,12,12\nbox,0,-10\nbox,0,-12";
  
   pre.innerHTML = code;
}

	

  	
	document.getElementById('mission1').addEventListener('click', setMission1, false);
	document.getElementById('mission2').addEventListener('click', setMission2, false);
	document.getElementById('mission3').addEventListener('click', setMission3, false);
	