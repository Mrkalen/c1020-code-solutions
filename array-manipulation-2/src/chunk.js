/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var chunked = [];
  var chunks = [];
  for (var i = 0; i < array.length; i++) {
    chunks.push(array[i]);
    if (chunks.length === size) {
      chunked.push(chunks);
      chunks = [];
    }
  }
  if (array.length % 2) {
    chunked.push(array.length - 1);
  }
  return chunked;
}
