const router = require('express').Router();
const thoughtController = require('../controllers/thoughtController');


// GET all thoughts
router.get('/thoughts', thoughtController.getAllThoughts);

// GET a thought by ID
router.get('/thoughts/:thoughtId', thoughtController.getThoughtById);

// POST a new thought
router.post('/thoughts', thoughtController.createThought);

// PUT to update a thought by ID
router.put('/thoughts/:thoughtId', thoughtController.updateThoughtById);

// DELETE a thought by ID
router.delete('/thoughts/:thoughtId', thoughtController.deleteThoughtById);


module.exports = router;
