const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});