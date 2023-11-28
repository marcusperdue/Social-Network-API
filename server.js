const express = require('express');
const apiRoutes = require('./routes');
const db = require('./config/connection');
const { User, Thought, Reaction } = require('./models');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});