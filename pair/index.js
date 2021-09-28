import Pair from './Pair.js';

const pair = new Pair('one', 'two');

console.log(pair + ''); // '(one, two)'

pair.setFirst(1);

console.log(pair + ''); // '(1, two)'