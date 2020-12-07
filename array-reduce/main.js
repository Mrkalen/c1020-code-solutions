/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, cur) => acc + cur);
console.log('sum:', sum);

const product = numbers.reduce((acc, cur) => acc * cur);
console.log('product:', product);

function transaction(acc, cur) {
  let amount = acc;
  if (cur.type === 'deposit') {
    amount += cur.amount;
  } else {
    amount -= cur.amount;
  }
  return amount;
}
const balance = account.reduce(transaction, 0);
console.log('balance:', balance);

function combine(acc, cur) {
  const combined = acc;
  for (const key in cur) {
    combined[key] = cur[key];
  }
  return combined;
}

const composite = traits.reduce(combine);
console.log('composite:', composite);
