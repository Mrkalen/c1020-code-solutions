/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var chunked = [];
  var chunks = [];
  var rest = Math.floor(array.length / size);

  for (var i = 0; i < array.length; i++) {
    chunks.push(array[i]);
    if (chunks.length === size) {
      chunked.push(chunks);
      chunks = [];
    }
  }
  if (chunked.length === rest && chunks.length !== size) {
    if (chunks.length === 0) {
      return chunked;
    } else {
      chunked.push(chunks);
    }
  }
  return chunked;
}
