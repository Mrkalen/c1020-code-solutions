const express = require('express');

const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

const jsonMid = express.json();

app.use(jsonMid);

app.post('/api/grades', (req, res) => {
  grades.push(req.body);
  grades[0].id = nextId;
  res.status(201).send(grades.id[nextId]);
  nextId += 1;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
