const express = require('express');
const apiRoutes = require('./routes/api');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Combine apiRoutes and userRoutes into a single router
const combinedRoutes = express.Router();
combinedRoutes.use('/api', apiRoutes);
 

app.use(combinedRoutes);

db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
