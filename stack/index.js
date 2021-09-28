import Stack from './Stack.js';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

stack.push(4);
stack.push(5);

console.log(stack + ''); // [5, 4, 2, 1]
