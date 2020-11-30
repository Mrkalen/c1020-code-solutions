const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('This is a string!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
