/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var chars = string.split('');
  var newString;
  for (var i = 0; i < length; i++) {
    if (newString === undefined) {
      if (chars[i] === undefined) {
        return '';
      } else {
        newString = chars[i];
      }
    } else if (i === chars.length) {
      return newString;
    } else {
      newString += chars[i];
    }
  }
  return newString;
}
