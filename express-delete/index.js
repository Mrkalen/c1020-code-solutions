const express = require('express');

const grades = [
  {
    id: 1,
    name: 'Bill',
    course: 'Adventures',
    grade: 'Excellent'
  },
  {
    id: 2,
    name: 'Ted',
    course: 'Facing Music',
    grade: 'Excellent'
  }
];

const app = express();

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).send({ Error: 'ID Is Not a Positive Integer' });
    return;
  }
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === id) {
      grades.splice([i], 1);
      res.sendStatus(204);
      return;
    }
  }
  res.status(404).send({ Error: `Could Not Find ID: ${req.params.id}` });
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
