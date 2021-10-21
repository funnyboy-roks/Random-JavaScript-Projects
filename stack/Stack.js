export default class Stack {
    constructor() {
        this.values = [];
    }

    push(item) {
        this.values.unshift(item);
    }

    pop() {
        return this.values.shift();
    }

    toString() {
        return `[${this.values}]`;
    }
}
