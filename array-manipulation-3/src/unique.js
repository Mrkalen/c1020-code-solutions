/* eslint-disable no-unused-vars */
function unique(array) {
  var unique = [];

  if (array.length === 0) {
    return unique;
  } else if (unique.length === 0) {
    unique.push(array[0]);
  }
  var i = 0;
  while (i < array.length) {
    if (unique.includes(array[i])) {
      i++;
    } else {
      unique.push(array[i]);
      i++;
    }
  }
  return unique;
}
