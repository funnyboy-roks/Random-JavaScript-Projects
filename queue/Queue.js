export default class Queue {
    constructor () {
        this.values = [];
    }

    enqueue (item) {
        this.values.push(item);
    }

    dequeue () {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length == 0;
    }

    peek() {
        return this.values[0] || null;
    }
}