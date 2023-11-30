const { Thought } = require('../models');

const thoughtController = {

  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  

  createThought: async (req, res) => {
    try {
      // Assuming you have the userId available in the request, you can add it to the thought data
      const { userId } = req.body;
      
      if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
      }
  
      // Create a new thought with the userId
      const newThought = await Thought.create({
        ...req.body, // Copy the existing thought data from the request
        userId, // Add the userId to the thought
      });
  
      res.json(newThought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  updateThoughtById: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  deleteThoughtById: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(deletedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  createReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      // Assuming reaction data is sent in req.body
      thought.reactions.push(req.body);
      await thought.save();
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  
  removeReaction: async (req, res) => {
    try {
      const thoughtId = req.params.thoughtId;
      const reactionId = req.params.reactionId;

      // Find the thought by thoughtId
      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      // Remove the reaction by reactionId
      thought.reactions = thought.reactions.filter((reaction) => reaction.reactionId.toString() !== reactionId);

      // Save the updated thought
      await thought.save();

      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

};

module.exports = thoughtController;
