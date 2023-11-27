const router = require('express').Router();
const { Thought } = require('../../models');

// Define routes for thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
