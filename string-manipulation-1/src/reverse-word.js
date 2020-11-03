/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var reversedStrings = [];
  var reversed = [];
  for (var i = word.length - 1; i >= 0; i--) {
    reversedStrings.push(word[i]);
  }
  for (var j = 0; j < reversedStrings.length; j++) {
    reversed += reversedStrings[j];
  }
  return reversed;
}
