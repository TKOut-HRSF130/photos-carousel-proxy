const express = require('express');
const path = require('path');

const port = 3004;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Proxy Server is listening on https:??localhost:${port}`);
});
