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
  res.status(200).send(notes);
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
  const note = req.body;

  if (!req.body.content) {
    res.status(400).send({ Error: 'Note Must Have Content Property' });
  } else {
    data.notes[data.nextId] = { id: data.nextId, content: note.content };
    data.nextId += 1;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).send({ Error: 'An Unexpected Error Has Occurred' });
      } else {
        res.status(201).send({ id: data.nextId - 1, content: note.content });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).send({ Error: 'ID Is Not A Positive Integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ Error: `No Notes With ID: ${id}` });
  } else {
    delete data.notes[req.params.id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).send({ Error: 'An Unexpected Error Has Occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const note = req.body;
  if (isNaN(id) || id < 0) {
    res.status(400).send({ Error: 'ID Is Not A Positive Integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ Error: `No Notes With ID: ${id}` });
  } else if (!req.body.content) {
    res.status(400).send({ Error: 'Note Must Have Content Property' });
  } else {
    data.notes[id] = { id: id, content: note.content };
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, 'utf8', err => {
      if (err) {
        res.status(500).send({ Error: 'An Unexpected Error Has Occurred' });
      } else {
        res.status(200).send(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
