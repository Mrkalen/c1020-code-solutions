/* eslint-disable no-unused-vars */
function titleCase(string) {
  debugger;
  var words = string.split(' ');
  var capitalizedWords = '';
  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      capitalizedWords = capitalize(words[i]);
    } else if (words[i].length > 3) {
      capitalizedWords += ' ' + capitalize(words[i]);
    }
  }
  return capitalizedWords;
}

// Capitalize word string manipulation 1

function capitalize(word) {
  word = word.toLowerCase();
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}

// capitalizeWord string manipulation 2

function capitalizeWord(word) {
  word = word.toLowerCase();
  word = word[0].toUpperCase() + word.slice(1);

  if (word === 'Javascript') {
    word = word.replace('s', 'S');
  }
  return word;
}

// CapitalizeWords

function capitalizeWords(string) {
  string = string.toLowerCase();

  var stringSplit = string.split(' ');
  for (var i = 0; i < stringSplit.length; i++) {
    var word = [];
    var newString;
    word = stringSplit[i];
    word = word[0].toUpperCase() + word.slice(1);

    if (word === 'Javascript') {
      word = word.replace('s', 'S');
      newString = newString + ' ' + word;
    }
    if (newString === undefined) {
      newString = word;
    } else {
      newString = newString + ' ' + word;
    }
  }
  return newString;
}
