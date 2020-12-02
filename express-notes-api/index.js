const express = require('express');
const app = express();
const fs = require('fs');

const data = require('./data.json');
const jsonMid = express.json();
app.use(jsonMid);

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const property in data.notes) {
    notes.push(data.notes[property]);
  }
  if (notes.length >= 0) {
    res.status(200).send(notes);
  } else {
    res.sendStatus(404);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).send({ Error: 'ID Is Not a Positive Integer' });
  } else if (data.notes[id] !== undefined) {
    res.send(data.notes[id]);
  } else {
    res.status(404).send({ Error: `No Notes With ID: ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ Error: 'Note Must Have Content Property' });
  } else if (writeNote(req.body, data) === 'err') {
    res.status(500).send({ Error: 'An Unexpected Error Has Occured' });
  }
});

function writeNote(note, data) {
  data.notes[data.nextId] = { id: data.nextId, content: note.content };
  data.nextId += 1;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('baba/data.json', newData, 'utf8', err => {
    if (err) return 'err';
  });
}

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
