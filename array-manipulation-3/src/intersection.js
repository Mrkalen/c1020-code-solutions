/* eslint-disable no-unused-vars */
function intersection(first, second) {
  var intersection = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersection.push(first[i]);
    }
  }
  return intersection;
}
