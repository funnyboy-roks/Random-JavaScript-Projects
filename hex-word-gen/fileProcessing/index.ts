import fs from 'fs';

const l337Map: Map<string, string> = new Map();

l337Map.set('a', '4');
l337Map.set('e', '3');
l337Map.set('g', '6');
l337Map.set('i', '1');
l337Map.set('l', '1');
l337Map.set('o', '0');
l337Map.set('q', '9');
l337Map.set('s', '5');
l337Map.set('t', '7');
l337Map.set('z', '2');

const setupWords = (): void => {
	// Put words into words.txt by running `curl http://http://www-personal.umich.edu/~jlawler/wordlist > allwords.txt` in terminal
	const words = fs
		.readFileSync('allwords.txt', 'utf-8')
		.replace(/\r/g, '')
		.split('\n')
		.filter((w) => !w.includes('-'));
	fs.writeFileSync('words.txt', words.join('\n'));
};

const l337ify = (word: string): string => {

	// if(word.length !== 6 || /[0-9a-fgiloqstz]/i.test(word)) return null;

	return word.replace(/[giloqstz]/gi, (l) => {
		return l337Map.get(l) || l
	})

}

// setupWords();

const findWords = () => {
	const words = fs
		.readFileSync('words.txt', 'utf-8')
		.split('\n')
		.filter(w => /^[0-9a-fgiloqstz]{6}$/i.test(w))
		.map(word => (
			{
				word,
				hex: l337ify(word)
			}
		));
	fs.writeFileSync('hexwords.json', JSON.stringify(words, null, 4)/* words.join('\n') */);
};

findWords();
