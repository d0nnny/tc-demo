const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hello from TeamCity CI/CD (tc-demo) running on AWS!');
});

app.listen(port, () => console.log(`App running on port ${port}`));
