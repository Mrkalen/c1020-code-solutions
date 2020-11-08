/* eslint-disable no-unused-vars */
function zip(first, second) {
  var zipped = [];
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      zipped.push([first[i], second[i]]);
    }
  } else if (first.length > second.length) {
    for (var j = 0; j < second.length; j++) {
      zipped.push([first[j], second[j]]);
    }
  } else {
    for (var k = 0; k < first.length; k++) {
      zipped.push([first[k], second[k]]);
    }
  }
  return zipped;
}
