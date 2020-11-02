/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  debugger;
  var charsFirst = firstString.split('');
  var charsSecond = secondString.split('');
  var firstNoSpace;
  var secondNoSpace;
  for (var i = 0; i < charsFirst.length; i++) {
    if (charsFirst[i] === ' ') {
      charsFirst.splice(charsFirst[i], 0);
    } else if (firstNoSpace === undefined) {
      firstNoSpace = charsFirst[i];
    } else {
      firstNoSpace += charsFirst[i];
    }
  }
  for (var j = 0; j < charsSecond.length; j++) {
    if (charsSecond[j] === ' ') {
      charsSecond.splice(charsSecond[j], 0);
    } else if (secondNoSpace === undefined) {
      secondNoSpace = charsSecond[j];
    } else {
      secondNoSpace += charsSecond[j];
    }
  }

  var firstSplit = firstNoSpace.split('');
  var secondSplit = secondNoSpace.split('');
  var k = 0;

  while (k < firstSplit.length) {
    if (secondSplit.includes(firstSplit[k]) && firstSplit.includes(secondSplit[k])) {
      k++;
    } else {
      return false;
    }
  }
  return true;
}
