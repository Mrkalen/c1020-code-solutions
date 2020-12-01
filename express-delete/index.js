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
  grades.splice(req.params.id);
  res.sendStatus(204);
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
