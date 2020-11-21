/* eslint-disable no-unused-vars */
function union(first, second) {
  var union = [];
  for (var i = 0; i < first.length; i++) {
    if (union.includes(first[i]) !== true) {
      union.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (union.includes(second[j]) !== true) {
      union.push(second[j]);
    }
  }
  return union;
}
