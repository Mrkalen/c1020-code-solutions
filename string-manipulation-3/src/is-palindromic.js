/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var chars = string.split('');
  var noSpace;
  for (var j = 0; j < chars.length; j++) {
    if (chars[j] === ' ') {
      chars.splice(chars[j], 0);
    } else if (noSpace === undefined) {
      noSpace = chars[j];
    } else {
      noSpace += chars[j];
    }
  }
  var newString = noSpace.split('');
  var reverse;

  for (var i = 0; i < newString.length + 1; i++) {
    if (reverse === undefined) {
      reverse = newString[newString.length - i];
    } else {
      reverse += newString[newString.length - i];
    }
  }
  if (reverse === noSpace) {
    return true;
  } else {
    return false;
  }
}
