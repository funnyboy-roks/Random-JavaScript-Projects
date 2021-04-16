const out = document.querySelector('#output');

let outString = (`<span style="color: blue">0 - </span>`) + '1<br>';

let lastArr = [1];
let line = 0;

function step() {
    line++;
	lastArr = [0, ...lastArr, 0];
	const newArr = [];
	for (let i = 1; i < lastArr.length; ++i) {
		newArr.push(lastArr[i] + lastArr[i - 1]);
	}
	outString += (line % 2 == 1 ? '<span style="color:red">' : '<span style="color:black">') + 
        (`<span style="color: blue">${line} - </span>`) + 
        (lastArr = newArr).join(' <span style="color:blue">-</span> ') + '</spawn><br>';
    out.innerHTML = outString;
}
out.innerHTML = outString;

function repeat(n){
    lastArr = [1];
    line = 0;
    outString = '<span style="color: blue">0 - </span>1<br>'
    for(let i = 0; i < n; ++i) {
        step();
    }
}

