//  Modules
const namess = require('./4 - names');
// There is another way of writing this using object destructuring
// const {peter, john} = require('./4 - names');
// Here we are extracting john and peter from names 
// and assigning them to new variables of the same name.
const sayHi = require('./5 - utils');
// console.log(names);

const data = require('./6 - altsyntax');
// console.log(data);

require('./7 - mind');
sayHi("Ashmit");
sayHi(namess.john);
sayHi(namess.peter);
