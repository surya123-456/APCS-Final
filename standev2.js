function calcStanDev() {
    var standardDev = document.getElementById("stDev").value;
    var numTrials = document.getElementById("numVar").value;
                    
                    
    if(standardDev == 0 || numTrials == 0){
            return "Enter Values";
    }
    var total = (standardDev ** (1/2))/(numTrials);
    total = total.toFixed(3);
                    

    document.getElementById("StanE").innerHTML = total;
    
    
}

 document.getElementById("calculate").onclick = function() {
    calcStanDev();
     


};
        
        