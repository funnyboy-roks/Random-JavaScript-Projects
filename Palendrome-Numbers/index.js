const numberInput = document.querySelector('#number');
const output = document.querySelector('#output')

numberInput.addEventListener('input', findPalendromeNumber);

function findPalendromeNumber(){

    const num = numberInput.valueAsNumber;

    if(num == NaN){
        output.innerHTML = "Invalid Number: " + numberInput.value;
        return;
    }

    if((""+num) == reverseStr(""+num)){
        output.innerHTML = "" + num;
        return;
    }

    // output.innerHTML = num
    let tries = 100;
    let current = num;
    let values = [];
    while((""+current) != reverseStr(""+current) && tries > 0){
        reverseCurrent = reverseStr("" + current);
        // values.push(current + " + " + reverseStr(""+current) + " = " + +);
        values.push(`${current} + ${reverseCurrent} = ${+current + +reverseCurrent}`);

        current = (+current + +reverseCurrent);
        tries --;
    }

    output.innerHTML = values.join('<br>') + (tries == 0 ? '<br>Failed after 100 tries.' : '');


}

function reverseStr(str){
    let out = "";
    for(let i = str.length-1; i >= 0; --i){
        out += str[i];
    }
    return out;
}


findPalendromeNumber()