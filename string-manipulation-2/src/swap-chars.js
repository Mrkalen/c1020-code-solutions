/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var chars = string.split('');
  var charAtFirst = chars[firstIndex];
  var charAtSecond = chars[secondIndex];
  var newString;

  chars.splice(firstIndex, 1, charAtSecond);
  chars.splice(secondIndex, 1, charAtFirst);

  for (var i = 0; i < chars.length; i++) {
    if (newString === undefined) {
      newString = chars[i];
    } else {
      newString += chars[i];
    }
  }
  return newString;
}
