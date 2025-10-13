const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the Web service!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`✅ Web service running on port ${port}`);
});
