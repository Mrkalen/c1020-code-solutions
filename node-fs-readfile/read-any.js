/* eslint-disable no-console */
const fs = require('fs');

const text = process.argv[2];

fs.readFile(`/home/dev/lfz/c1020-code-solutions/node-fs-readfile/${text}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
