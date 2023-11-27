const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/social-network';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,  
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`MongoDB Connection Error: ${error}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
