const fs = require('fs');

function deleteNote(data, index) {
  const numericIndex = Number(index);
  delete data.notes[numericIndex];
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = deleteNote;
