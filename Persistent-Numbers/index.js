const numberInput = document.querySelector('#input');
const output = document.querySelector('#output');

numberInput.addEventListener('input', () => {output.innerHTML = persistentNumber(numberInput.valueAsNumber)});

function persistentNumber(number){

    let current = "" + number;
    let values = [];

    let tries = 100;
    while(current.length > 1 && tries > 0){
        values.push(current)
        let newNum = 1;
        for(let x of current){
            newNum *= +x;
        }
        console.log(tries, newNum, current);
        current = "" + newNum;
        tries--;
    }

    // output.innerHTML = values.length + ':<br>' + values.join('<br>') + '<br>' + current;
    return values.length;
}

function testAll(maxTries){
    let record = 0;
    let recordHolder = 0;

    for(let i = 0; i < maxTries; ++i){
        let num = persistentNumber(i);
        if(record < num){
            record = persistentNumber(i);
            recordHolder = i;

        }
        output.innerHTML = 'Current Record: ' + record + '<br>For: ' + recordHolder + '<br>Currently Checking: ' + i;
    }
    // persistentNumber(maxTries)
}