const router = require('express').Router();
const userController = require('../../controllers/userController');
 
// User Routes
router.get('/', userController.getAllUsers);  
router.post('/', userController.createUser); 
router.get('/:userId', userController.getUserById); 
router.put('/:userId', userController.updateUserById); 
router.delete('/:userId', userController.deleteUserById);


module.exports = router;

 