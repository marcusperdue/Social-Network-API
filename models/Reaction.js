const mongoose = require('mongoose');

function dateFormat(timestamp) {
  
  return timestamp.toLocaleString(); 
}

const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280, // Use maxlength, not maxLength
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp), // Implement the dateFormat function
  },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
