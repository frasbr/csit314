const EG = require("./expressionGenerator");

const eg = new EG();

const array = [];

array.push(eg.add(1, 4));
array.push(eg.subtract(10, 4));
array.push(eg.multiply(7, 7));
array.push(eg.divide(10, 2));
array.push(eg.sqrt(100));

console.log(array);
