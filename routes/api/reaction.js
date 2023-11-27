const router = require('express').Router();
const { Reaction } = require('../../models');

// Define routes for reactions
router.get('/', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
