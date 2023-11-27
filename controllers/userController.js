const { User } = require('../models');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  // Other controller functions for user routes (e.g., createUser, updateUser, deleteUser, etc.)
};

module.exports = userController;