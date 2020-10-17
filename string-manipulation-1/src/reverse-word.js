/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var reversed = [];
  for (var i = word.length; i > 0; i--) {
    reversed.push(word[i - 1]);
  }
  return reversed;
}
