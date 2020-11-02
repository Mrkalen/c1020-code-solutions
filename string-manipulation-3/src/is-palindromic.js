/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  debugger;
  var chars = string.split('');
  var newString;
  for (var j = 0; j < chars.length; j++) {
    if (chars[j] !== ' ') {
      if (newString === undefined) {
        newString = chars[j];
      } else {
        newString += chars[j];
      }
    } chars.splice(chars[j], 1);
  }

  var reverse;

  for (var i = 0; i < chars.length + 1; i++) {
    if (reverse === undefined) {
      reverse = chars[chars.length - i];
    } else {
      reverse += chars[chars.length - i];
    }
  }
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
