/* eslint-disable no-unused-vars */
function reverse(array) {
  var reverseReverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseReverse.push(array[i]);
  }
  return reverseReverse;
}
