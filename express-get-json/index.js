const express = require('express');

const arrayOfObjects = [
  {
    id: 1,
    name: 'Baby Yoda',
    course: 'The Force',
    grade: 9999
  },
  {
    id: 2,
    name: 'Mando',
    course: 'Helmet Removal',
    grade: 0
  }
];

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(arrayOfObjects);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
