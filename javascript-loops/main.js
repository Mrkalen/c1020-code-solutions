/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

//  getNumbersToTen
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('Value of getNumbersToTen:', getNumbersToTen());

// getEvenNumbersToTwenty

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

// repeatWord

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('Value of repeatWord:', repeatWord('banana ', 5));

// logEachCharacter

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log('Value of logEachCharacter:', logEachCharacter('Banana'));

// doubleAll

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('value of doubleAll:', doubleAll([1, 2, 3, 4, 5]));

// getKeys

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

console.log('Value of getKeys:', getKeys({ title: 'Book Title', author: 'Book Author', anotherKey: 'LOOK ANOTHER KEY!' }));

// getValues

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}

console.log('Value of getValues:', getValues({ title: 'Book Title', author: 'Book Author', anotherKey: 'LOOK ANOTHER KEY!' }));
