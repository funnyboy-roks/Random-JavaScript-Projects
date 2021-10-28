const txtIn = document.querySelector('#txt');
const txtOut = document.querySelector('#out');

txtIn.addEventListener('input', () => {
	txtOut.textContent = sarcasm(txtIn.value);
});

const sarcasm = (s) => {
	let n = 0;
	return s.split('').map((c) => {
		if(c === ' ') ++n;
		return c[n++ % 2 ? 'toLowerCase' : 'toUpperCase']();
	}).join('')
};
