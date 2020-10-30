/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  debugger;
  string = string.toLowerCase();

  var stringSplit = string.split(' ');
  console.log(stringSplit);
<<<<<<< HEAD

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
  
=======
  for (var i = 0; i < stringSplit.length; i++) {
    var word = [];
    word = stringSplit[i[stringSplit[0]]].toUpperCase() + stringSplit.slice(1);
  }
>>>>>>> 37980eefdebd51bfbdf95951d477d722891d2fd6
  return word;
}
