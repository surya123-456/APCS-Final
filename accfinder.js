function findAcc(){
	var inpWord = document.getElementById("inpWord").value.toLowerCase();
	var accIndex = -1;
	var questionWords = ["quien", "que", "donde", "cuando", "como", "cual"];
	var demonAdj = ["este","esta","ese","esa","aqel","aqella", "estos", "estas", "esas", "esos", "aquellos", "aquellas"];
	var specialCases = ["arbol", "carcel", "cesped", "debil"];
	for(var i = 0; i<questionWords.length; i++){
		if(inpWord===(questionWords[i])){
			var t = inpWord.length;
			for(var k = t; k > 0; k--){
				var temp = inpWord.substring(k-1, k);
				if(temp===("a") || temp===("o") || temp===("e")){
					accIndex = k-1;
					break;
				}
			}
			
		}
	}

	if(accIndex == -1){
		for(var j = 0; j<demonAdj.length; j++){
			if(inpWord===(demonAdj[j])){
				accIndex = inpWord.indexOf("e");
			}
		} 
	}

	if(accIndex == -1){
		if(inpWord.substring(inpWord.length-1, inpWord.length) === ("n") || inpWord.substring(inpWord.length-1, inpWord.length) === ("s")) {
			var u = inpWord.length;
			for(var r = u; r > 0; r--){
				var temp = inpWord.substring(r-1, r);
				if(temp === ("a") || temp === ("o") || temp === ("e") || temp === ("u") || temp === ("i")){
					accIndex = r-1;
					break;
				}
			}
			
		}
	}

	if(accIndex == -1){
		for(var y = 0; y < specialCases.length; y++) {
			if(inpWord === specialCases[y]){
				for(var w = 0; w < inpWord.length; w++){
					var temp2 = inpWord.substring(w, w+1);
					if(temp2 === ("a") || temp2 === ("e") || temp2 === ("i") || temp2 === ("o") || temp2 === ("u")){
						console.log(temp2)
						accIndex = w;
						break;
					}
				}
			}
		}
	}


	

	if(accIndex == -1){
		accIndex = "No Accent"
		document.getElementById("LocAcc").innerHTML = accIndex;
		return;
	}
	document.getElementById("LocAcc").innerHTML = accIndex+1;
}	

document.getElementById("AccFind").onclick = function() {
    findAcc();
     


};