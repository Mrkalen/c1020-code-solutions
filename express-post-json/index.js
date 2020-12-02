const express = require('express');

const app = express();

const grades = [];
let nextId = 1;

const jsonMid = express.json();

app.use(jsonMid);

app.get('/api/grades', (req, res) => {
  res.status(200).send(grades);
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  grades.push({ id: nextId, name: body.name, course: body.course, grade: body.grade });
  const newGrade = grades[nextId - 1];
  res.status(201).send(newGrade);
  nextId += 1;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
