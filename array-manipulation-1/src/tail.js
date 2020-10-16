/* eslint-disable no-unused-vars */
function tail(array) {
  var afterFirst = [];
  for (var i = 1; i < array.length; i++) {
    afterFirst.push(array[i]);
  }
  return afterFirst;
}
