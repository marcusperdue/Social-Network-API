const router = require('express').Router();
const { Thought } = require('../../models');

router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// GET to get a single thought by its _id
router.get('/thoughts/:thoughtId', async (req, res) => {
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
});

// POST to create a new thought
router.post('/thoughts', async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    // Push the created thought's _id to the associated user's thoughts array field
    const user = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(201).json(newThought);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// PUT to update a thought by its _id
router.put('/thoughts/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(updatedThought);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// DELETE to remove a thought by its _id
router.delete('/thoughts/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);

    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    // Remove the thought's _id from the associated user's thoughts array field
    const user = await User.findByIdAndUpdate(
      deletedThought.userId,
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(deletedThought);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  
});



module.exports = router;
