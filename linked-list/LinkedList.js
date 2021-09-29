export default class LinkedList {
	constructor(value = null, head = null) {
		this.head = head;
		this.tail = null;
		this.value = value;
	}

	get(i) {
		if (this.tail == null && i != 0) {
			throw new Error('Index out of bounds');
			return;
		}
		return i == 0 ? this.value : this.tail?.get(i - 1);
	}

	add(item) {
		if (this.value == null) {
			this.value = item;
			return;
		}
		if (this.tail == null) {
			this.tail = new LinkedList(item, this);
			return;
		}
		this.tail?.add(item);
	}

	remove(i) {
		if (i != 0) {
			if (this.tail == null) {
				throw new Error('Index out of bounds');
			}
			this.tail.remove(i - 1);
			return;
		}
		const head = this.head;
		this.head.tail = this.tail;
		this.tail.head = head;
	}

	toString() {
		return `[${this.getAllValues()}]`;
	}

	getAllValues() {
		let out = this.value + '';
		if (this.tail) {
			out += ', ';
			out += this.tail.getAllValues();
		}
		return out;
	}
}
