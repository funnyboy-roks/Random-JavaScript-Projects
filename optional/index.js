const Optional = require('./optional');

// const arr = ['abc', 'bca', 'cab'];
const arr = [undefined, undefined, undefined];
// const t = arr.find(x => x.startsWith('b'));
const t = arr.findOptional(x => x === undefined).orElse('asdf');

console.log(t);