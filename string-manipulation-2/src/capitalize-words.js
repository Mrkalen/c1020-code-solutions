/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  string = string.toLowerCase();

  var strings = string.split(' ');
  for (var i = 0; i < strings.length; i++) {
    string = strings.replace(strings[i[0]], string[i[0]].toUpperCase());
  }
  return string;
}
