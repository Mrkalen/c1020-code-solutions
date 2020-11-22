/* eslint-disable no-unused-vars */
function difference(first, second) {
  var difference = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      difference.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      difference.push(second[j]);
    }
  }
  return difference;
}
