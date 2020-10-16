/* eslint-disable no-unused-vars */
function tail(array) {
  var afterFirst = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      afterFirst.push(array[i]);
    }
  }
  return afterFirst;
}
