let index = 0;
let path;
function calculate(){
    // document.getElementById("submit").disabled = false;
    let number = Number(document.getElementById("number").value);
    let currentNumber = number;
    path   = document.getElementById("path");
    path.innerHTML = "";

    // path.innerHTML += currentNumber + "<br>↓"
    for(let i = 2; i <= number; i ++){
        mathify(i);
    
    }
    


}


function mathify(num){
    let currentNumber = num;
    path.innerHTML += "<hr>" + num + ": " + num + "→"
    while(currentNumber != 1){
        if(currentNumber % 2 == 1){
            currentNumber = (currentNumber * 3) + 1;
        }else{
            currentNumber = currentNumber / 2;
        }
        
        path.innerHTML += currentNumber
        if(currentNumber > 1){
            path.innerHTML += "→";
        }
    }

}

