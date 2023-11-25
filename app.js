// File: app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

