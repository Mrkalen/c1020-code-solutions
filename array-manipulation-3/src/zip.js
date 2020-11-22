/* eslint-disable no-unused-vars */
function zip(first, second) {
  var zipped = [];
  var shortest;

  if (first.length === second.length) {
    shortest = first.length;
  } else if (first.length > second.length) {
    shortest = second.length;
  } else {
    shortest = first.length;
  }

  for (var i = 0; i < shortest; i++) {
    zipped.push([first[i], second[i]]);
  }

  return zipped;
}
