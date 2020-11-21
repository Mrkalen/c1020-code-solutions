/* eslint-disable no-unused-vars */
function titleCase(string) {
  var words = string.split(' ');
  for (var j = 0; j < words.length; j++) {
    words[j] = words[j].toLowerCase();
    if (words[j] === 'web' || words[j] === 'javascript' || words[j] === 'api' || words[j] === 'javascript:') {
      words[j] = knownWords(words[j]);
    }
  }
  var capitalizedWords = '';
  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      capitalizedWords = capitalizeWord(words[i]);
    } else if (words[i].includes('-')) {
      capitalizedWords += ' ' + capHyphen(words[i]);
    } else if (words[i - 1][words[i - 1].length - 1] === ':') {
      capitalizedWords += ' ' + capitalizeWord(words[i]);
    } else if (words[i].length > 3) {
      capitalizedWords += ' ' + capitalizeWord(words[i]);
    } else {
      capitalizedWords += ' ' + words[i];
    }
  }
  return capitalizedWords;
}

// capitalizeWord string manipulation 2

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'web' || word === 'javascript' || word === 'api' || word === 'javascript:') {
    word = knownWords(word);
  } else {
    word = word[0].toUpperCase() + word.slice(1);
  }

  return word;
}

// Known words

function knownWords(word) {
  var knownWords = ['javascript', 'api', 'web', 'javascript:'];
  var capKnownWords = ['JavaScript', 'API', 'Web', 'JavaScript:'];
  for (var i = 0; i < knownWords.length; i++) {
    if (word === knownWords[i]) {
      word = capKnownWords[i];
    }
  }
  return word;
}

function capHyphen(word) {
  var words = [];
  if (word.includes('-')) {
    words = word.split('-');
    var string = words[0][0].toUpperCase() + words[0].slice(1) + '-' + words[1][0].toUpperCase() + words[1].slice(1);
  }
  return string;
}
