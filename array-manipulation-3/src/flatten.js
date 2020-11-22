/* eslint-disable no-unused-vars */
function flatten(array) {
  var flat = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flat.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      }
    }
  }
  return flat;
}
