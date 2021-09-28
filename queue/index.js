import Queue from './Queue.js';

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());