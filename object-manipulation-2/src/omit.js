/* eslint-disable no-unused-vars */

function omit(source, keys) {
  var omited = {};
  for (var property in source) {
    omited[property] = source[property];
  }
  for (var i = 0; i < keys.length; i++) {
    delete omited[keys[i]];
  }
  return omited;
}
