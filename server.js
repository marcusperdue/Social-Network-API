const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Server start error: ${error}`);
  }
};

startServer();
