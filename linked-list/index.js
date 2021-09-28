import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.add('1');
list.add('2');
list.add('3');

console.log(list.get(1));
console.log(list + '');
console.log(list.remove(1));
console.log(list + '');
