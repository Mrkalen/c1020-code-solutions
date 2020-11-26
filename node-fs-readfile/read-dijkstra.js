/* eslint-disable no-console */
const fs = require('fs');

fs.readFile('/home/dev/lfz/c1020-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
