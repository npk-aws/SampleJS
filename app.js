const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST endpoint
app.post('/api/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name || 'World'}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

