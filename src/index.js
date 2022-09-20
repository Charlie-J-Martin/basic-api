const express = require('express');

const app = express();
const port = 8080;

let count = 0;

app.get('/', (req, res) => {
  res.json({ count });
});

app.post('/', (req, res) => {
  ++count;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
