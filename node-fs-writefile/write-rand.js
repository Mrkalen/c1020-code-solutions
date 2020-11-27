const data = Math.random();
const fs = require('fs');

fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) throw err;
});
