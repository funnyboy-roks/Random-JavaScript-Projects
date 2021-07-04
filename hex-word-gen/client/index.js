const hexOut = document.querySelector('#hex');
const extOut = document.querySelector('#ext');

const getRandom = () => {
	const w = words[Math.floor(Math.random() * words.length)];
	hexOut.innerText = '#' + w.hex;
	if (w.hex !== w.word) {
		extOut.innerText =
			`\n(${w.word})\n` +
			Math.floor(
				(w.hex.split('').filter((s) => /\d/.test(s)).length / 6) * 100
			) +
			'% changed';
	}
	document.body.style.background = '#' + w.hex;
	document.title = '#' + w.hex;
	location.hash = w.hex;
};

window.onload = getRandom;

document.querySelector('#in').addEventListener('click', getRandom);
