/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log(`Result: ${add.add(x, y)}`);
} else if (process.argv[3] === 'minus') {
  console.log(`Result: ${subtract.subtract(x, y)}`);
} else if (process.argv[3] === 'times') {
  console.log(`Result: ${multiply.multiply(x, y)}`);
} else if (process.argv[3] === 'over') {
  console.log(`Result: ${divide.divide(x, y)}`);
}
