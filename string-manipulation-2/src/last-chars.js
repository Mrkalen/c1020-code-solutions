/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var chars = string.split('');
  var newString;
  for (var i = length; i > 0; i--) {
    if (newString === undefined) {
      if (chars.length < length) {
        return string;
      } else {
        newString = chars[chars.length - i];
      }
    } else if (newString.length === length) {
      return newString;
    } else {
      newString += chars[chars.length - i];
    }
  }
  return newString;
}
