const express = require('express');
const db = require('./config/connection');
const apiRoutes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(apiRoutes);

db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
