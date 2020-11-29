const fs = require('fs');

function updateNote(note, data, index) {
  data.notes[index] = note;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = updateNote;
