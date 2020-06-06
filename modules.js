//console.log(arguments);
//console.log(__dirname);
//console.log(require('module').wrapper);

//module.exports
/*
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.mul(5, 6));
*/

//just exports
//const calc2 = require('./test-module-2');
//destrcturing and saving all exported modules into same exact name and creating new variable

const {
    add,
    mul
} = require('./test-module-2');
console.log(mul(2, 3));
console.log(add(222, 3));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();