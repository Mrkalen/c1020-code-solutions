/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixed = [];
  for (var i = 0; i < words.length; i++) {
    var addSuffix = words[i] + suffix;
    suffixed.push(addSuffix);
  }
  return suffixed;
}
