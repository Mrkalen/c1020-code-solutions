/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var words = [];
  var reversed = [];
  words = string.split(' ');
  var reversedStrings = [];
  for (var i = 0; i < words.length; i++) {
    reversed.push(words[i].split('').reverse());

    for (var j = 0; j < reversed[i].length; j++) {
      reversedStrings += reversed[i][j];
    }
    if (i !== words.length - 1) {
      reversedStrings += ' ';
    }
  }
  return reversedStrings;
}
