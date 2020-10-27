/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  string = string.toLowerCase();

  var stringSplit = string.split(' ');
  console.log(stringSplit);
  for (var i = 0; i < stringSplit.length; i++) {
    var word = [];
    word = stringSplit[i[stringSplit[0]]].toUpperCase() + stringSplit.slice(1);
  }
  return word;
}
