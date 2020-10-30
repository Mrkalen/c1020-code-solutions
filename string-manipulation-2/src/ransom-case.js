/* eslint-disable no-unused-vars */
function ransomCase(string) {
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1 && i !== 0) {
      string = string.replace(string[i], string[i].toUpperCase());
    }
  }
  return string;
}
