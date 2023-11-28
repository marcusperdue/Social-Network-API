const router = require('express').Router();

// Import and use user routes
const userRoutes = require('./users');
router.use('/users', userRoutes);

// Import and use thought routes
const thoughtRoutes = require('./thoughts');
router.use('/thoughts', thoughtRoutes);

// Import and use reaction routes
const reactionRoutes = require('./reaction');
router.use('/reaction', reactionRoutes);

module.exports = router;