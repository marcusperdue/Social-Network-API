const router = require('express').Router();

// Import and use API routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;
