/* eslint-disable no-unused-vars */
function reverseWords(string) {
  debugger;
  var words = [];
  var reversed = [];
  words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    reversed += words[i].split('').reverse();
  }
  return console.log('reversed', reversed);
}
