/* eslint-disable no-unused-vars */
function numVowels(string) {
  string = string.toLowerCase();
  var vowels = string.split('');
  var count = 0;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === 'a' || vowels[i] === 'e' || vowels[i] === 'i' || vowels[i] === 'o' || vowels[i] === 'u') {
      count++;
    }
  }
  return count;
}
