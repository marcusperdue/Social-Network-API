const { Thought, Reaction } = require('../models');

const reactionController = {

  createReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const newReaction = await Reaction.create(req.body);
      thought.reactions.push(newReaction);
      await thought.save();

      res.json(newReaction);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  removeReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      thought.reactions = thought.reactions.filter(
        (reaction) => reaction._id.toString() !== req.params.reactionId
      );

      await thought.save();

      res.json({ message: 'Reaction removed' });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

};

module.exports = reactionController;
