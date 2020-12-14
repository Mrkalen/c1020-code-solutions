const express = require('express');
const path = require('path');

const app = express();
const pubDir = path.join(__dirname, 'public');

const staticServ = express.static(pubDir);

app.use(staticServ);

app.listen(3000, () => {
  // eslit-disable-next-line no-console
  console.log('Express server listening to port 3000');
});
