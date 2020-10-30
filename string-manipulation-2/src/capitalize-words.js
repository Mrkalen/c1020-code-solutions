/* eslint-disable no-unused-vars */
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
