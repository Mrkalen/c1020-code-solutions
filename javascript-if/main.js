/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
/* eslint-disable no-console, no-unused-vars */
// isUnderFive

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('value of 4 isUnderFive:', isUnderFive(4));

// isEven

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('value of 345 isEven:', isEven(345));

// startsWithJ

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('value of Jet startsWithJ:', startsWithJ('Jet'));

// isOldEnoughToDrink

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var kalen = {
  name: 'Kalen Cobb',
  age: 34
};

console.log('value of kalen isOldEnoughToDrink:', isOldEnoughToDrink(kalen));

// isOldEnoughToDrive

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var olive = {
  name: 'Olive Cobb',
  age: 6
};

console.log('value of olive isOldEnoughToDrive:', isOldEnoughToDrive(olive));

// isOldEnoughToDrinkAndDrive

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  } else {
    return false;
  }
}

var dwight = {
  name: 'Dwight K Schrute',
  age: 35
};

console.log('value of dwight isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(dwight));

// categorizeAcidity

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 7 && pH >= 1) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

console.log('value of categorizeAcidity:', categorizeAcidity(-1));

// introduceWarnerBro

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "Im'cute~";
  } else {
    return 'Goodnight everybody!';
  }
}

console.log('value of introduceWarnerBro:', introduceWarnerBro('Batman'));
