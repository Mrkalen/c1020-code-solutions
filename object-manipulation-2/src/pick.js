/* eslint-disable no-unused-vars */
function pick(source, keys) {
  debugger;
  var properties = [];
  var values = [];
  var picked = {};
  // for (var property in source) {
  //   properties.push(property);
  // }
  // for (var value in source) {
  //   values.push(source[value]);
  // }
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      properties.push(keys[i]);
    }
  }
}
