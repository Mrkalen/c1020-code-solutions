/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const p = takeAChance('Kalen');

p.then(value => {
  console.log(value);
});
p.catch(error => {
  console.log(error.message);
});
