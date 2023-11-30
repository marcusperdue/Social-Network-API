const router = require('express').Router();
const reactionController = require('../../controllers/reactionController');
// Reaction Routes
router.post('/thoughts/:thoughtId/reactions', reactionController.createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.removeReaction);
module.exports = router;
