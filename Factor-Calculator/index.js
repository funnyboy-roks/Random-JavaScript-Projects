let factorsX = factorsY = sums =[];

function calculate(){
    let number = document.getElementById("number").value;
    getFactors(number);
}

function getFactors(num){
    num = Number(num);
    sums = [];
    factorsX = [];
    factorsY = []; // Reset factorsX and factorsY back to blank arrays.

    if(num < 0){
        for(let x = num; x < 0; x++){
            let y = num/x;
            if(Number.isInteger(y)){
                factorsX.push(x);
                factorsY.push(y);
            }
        }
    }else{
        for(let x = num; x > 0; x--){
            let y = num/x;
            if(Number.isInteger(y)){
                factorsX.push(x);
                factorsY.push(y);
            }
        }
    }

    for(let i = 0; i < factorsX.length; i++){
        sums.push(factorsX[i] + factorsY[i])
    }
    // console.log("Factors of " + num)
    // console.table([factorsX, factorsY]);

    console.log(factorsX);
    console.log(factorsY);
    console.log(sums);
    console.log("--------------------------");
    displayFactors(num, factorsX, factorsY, sums);
}

function displayFactors(num, x, y, total){
    let factors = "";
    for(let i = 0; i < x.length; i++){
        factors += x[i] + " + " + y[i] + " = " + total[i] + "<br>";
    }
    document.getElementById("factors").innerHTML = num + "<br> ----- <br>" + factors;
}