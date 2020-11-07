/* eslint-disable no-unused-vars */
function titleCase(string) {
  debugger;
  var words = string.split(' ');
  var capitalizedWords = '';
  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      capitalizedWords = capitalizeWord(words[i]);
    } else if (words[i].length > 3) {
      capitalizedWords += ' ' + capitalizeWord(words[i]);
    } else if (words[i] == 'web' || ) {

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

// Minor words

function minorWords(word) {
  var capitalized = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < minorWords.length; i++) {
    if (word === minorWords[i]) {
     capitalized = capitalizeWord(word);
    }
  }
  return capitalized;
}


// Known words

function knownWords(word) {
  var knownWords = ['javascript', 'api', 'web'];
  var capKnownWords = ['JavaScript', 'API', 'Web'];
  for (var i = 0; i < knownWords.length; i++) {
    if (word == knownWords[i]) {
      word = capKnownWords[i];
    }
  }
  return word;
}
