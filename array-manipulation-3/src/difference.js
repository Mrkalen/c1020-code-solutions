/* eslint-disable no-unused-vars */
function difference(first, second) {
  var difference = [];
  var i = 0;
  while (i < first.length) {
    if (second.includes(first[i])) {
      i++;
    } else {
      difference.push(first[i]);
      i++;
    }
  }
  var j = 0;
  while (j < second.length) {
    if (first.includes(second[j])) {
      j++;
    } else {
      difference.push(second[j]);
      j++;
    }
  }
  return difference;
}
