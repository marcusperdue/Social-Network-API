const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(apiRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/social-network');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
