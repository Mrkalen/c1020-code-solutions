/* exported filterOutStrings */
function filterOutStrings(values) {
  var notStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      notStrings.push(values[i]);
    }
  }
  return notStrings;
}
