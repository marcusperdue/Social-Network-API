const router = require('express').Router();
const userController = require('../../controllers/userController');
 
// GET all users
router.get('/users', userController.getAllUsers);

// POST a new user
router.post('/users', userController.createUser);

// GET a single user by userId
router.get('/users/:userId', userController.getUserById);

// PUT to update a user by userId
router.put('/users/:userId', userController.updateUserById);

// DELETE a user by userId
router.delete('/users/:userId', userController.deleteUserById);

// Add other user-related routes as needed

module.exports = router;

 