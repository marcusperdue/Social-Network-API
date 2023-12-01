// Main API Routes Configuration
const express = require('express');
const router = express.Router();

const thoughtsRoutes = require('./thoughts');
const usersRoutes = require('./users');

// Use the 'thoughts' and 'users' sub-routes
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;