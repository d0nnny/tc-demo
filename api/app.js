const express = require('express');
const app = express();

// Basic root route
app.get('/', (req, res) => {
  res.send('Hello from the API service!');
});

// Optional: health check route (ALB will use this)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Port for ECS / Docker
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`✅ API service running on port ${port}`);
});
