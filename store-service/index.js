const express = require('express');
const app = express();
const PORT = 3002;

app.get('/api/auth/test', (req, res) => {
  res.send({ message: 'Auth service running!' });
});

app.listen(PORT, () => console.log(`Auth service on port ${PORT}`));
