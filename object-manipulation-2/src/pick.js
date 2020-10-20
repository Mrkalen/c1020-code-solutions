/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var properties = [];
  var values = [];
  var picked = {};
  for (var property in source) {
    properties.push(property);
  }
  for (var value in source) {
    values.push(source[value]);
  }
  for (var i = 0; i < properties.length; i++) {
    picked = source[keys[i]];
  }
}
