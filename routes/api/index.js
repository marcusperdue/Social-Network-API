const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const thoughtController = require('../../controllers/thoughtController');
const reactionController = require('../../controllers/reactionController');


// User Routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.updateUserById);
router.delete('/users/:userId', userController.deleteUserById);

// Thought Routes
router.get('/thoughts', thoughtController.getAllThoughts);
router.get('/thoughts/:thoughtId', thoughtController.getThoughtById);
router.post('/thoughts', thoughtController.createThought);
router.put('/thoughts/:thoughtId', thoughtController.updateThoughtById);
router.delete('/thoughts/:thoughtId', thoughtController.deleteThoughtById);

router.post('/thoughts/:thoughtId/reactions', reactionController.createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.removeReaction);

module.exports = router;
