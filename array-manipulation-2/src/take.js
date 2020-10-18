/* eslint-disable no-unused-vars */
function take(array, count) {
  var taken = [];
  for (var i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return taken;
    } else {
      taken.push(array[i]);
    }
  }
  return taken;
}
