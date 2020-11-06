/* eslint-disable no-unused-vars */
function initial(array) {
  var allButLast = [];
  var i = 0;
  while (i < array.length - 1) {
    allButLast.push(array[i]);
    i++;
  }
  return allButLast;
}
