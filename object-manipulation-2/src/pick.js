/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var properties = [];
  var values = [];
  var picked = {};
  for (var property in source) {
    properties.push(property);
  }
  for (var key in source) {
    values.push(source[property]);
  }
  for (var i = 0; i < properties.length; i++) {
    if (keys[i] === source) {
      picked[properties] = values;
    }
  }
}
