/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  word = word.toLowerCase();
  word = word[0].toUpperCase() + word.slice(1);

  if (word === 'Javascript') {
    word = word.replace('s', 'S');
  }
  return word;
}
