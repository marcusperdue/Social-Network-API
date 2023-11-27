const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
});

// Define a virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
