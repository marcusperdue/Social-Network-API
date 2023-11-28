const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');
const db = require('./config/connection');
const { User, Thought, Reaction } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', apiRoutes);

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
