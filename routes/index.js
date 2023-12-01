// Main Router Configuration
const router = require("express").Router();
const apiRoutes = require('./api');

// Use the 'api' sub-routes
router.use('/api', apiRoutes);

module.exports = router;
