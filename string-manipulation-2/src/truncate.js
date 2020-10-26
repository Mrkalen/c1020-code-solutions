/* eslint-disable no-unused-vars */
function truncate(length, string) {
  var truncated = '';
  truncated = string.slice(0, length) + '...';
  return truncated;
}
