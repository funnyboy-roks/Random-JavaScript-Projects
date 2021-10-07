const arrayIsSorted = (array) => {
	let sorted = true;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			sorted = false;
		}
	}
	return sorted;
}

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const bogoSort = (array) => {
	if(arrayIsSorted(array)) { return array;}
	let out = shuffleArray(array);
	let c = 0;
	while (!arrayIsSorted(out) && c < 1000) {
		out = shuffleArray(out);
		++c;
	}

	console.log(`Sorted in ${c} iterations`);
	return out;
}

const unsorted = shuffleArray([1, 2, 3, 4, 5,]);

console.log(unsorted);
console.log(bogoSort
(unsorted));
