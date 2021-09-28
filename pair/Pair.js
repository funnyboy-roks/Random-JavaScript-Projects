export default class Pair {
	constructor(first, second) {
		this.first = first;
		this.second = second;
	}

	getFirst() {
		return this.first;
	}

	getSecond() {
		return this.second;
	}

	setFirst(first) {
		this.first = first;
	}

	setSecond(second) {
		this.second = second;
	}

	toString() {
		return `(${this.first}, ${this.second})`;
	}
}
