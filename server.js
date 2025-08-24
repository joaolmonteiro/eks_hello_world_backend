const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}` });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
