/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  string = string.toLowerCase();

  var stringSplit = string.split(' ');
  console.log(stringSplit);

for (var i = 0; i < stringSplit.length; i++) {

  function capitalizeWord(stringSplit[i]) {
    word = word.toLowerCase();
    word = word[0].toUpperCase() + word.slice(1);

    if (word === 'Javascript') {
      word = word.replace('s', 'S');
    }
    return word;
  }
}
  
  return word;
}
