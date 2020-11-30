const fs = require('fs');

function writeNote(note, data) {
  const id = data.nextId;
  data.notes[id] = note;
  data.nextId += 1;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = writeNote;
