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
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id[id] === undefined) {
      res.status(400).send({ Error: `Could Not Find ID: ${req.params.id}` });
    } else {
      grades[i].id[id].splice(req.params.id, 1);
      res.sendStatus(204);
    }
  }
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
