/* eslint-disable no-unused-vars */
function invert(source) {
  var properties = [];
  var value = [];
  var inverted = {};

  for (var property in source) {
    value.push(source[property]);
    properties.push(property);
  }

  for (var i = 0; i < value.length; i++) {
    inverted[value[i]] = properties[i];
  }
  return inverted;
}
