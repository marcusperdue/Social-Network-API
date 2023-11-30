const { User, Thought } = require('../models');


const userController = {
  // Controller logic for getting all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  
  getUserById: async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Log the user ID for debugging
      console.log('User ID:', userId);
  
      // Retrieve the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Retrieve all thoughts associated with the user
      const thoughts = await Thought.find({ username: user.username }).select('-__v');
  
      // Log the retrieved thoughts for debugging
      console.log('Retrieved Thoughts:', thoughts);
  
      if (thoughts.length === 0) {
        // If there are no thoughts, return just the user without thoughts
        return res.json({ user });
      } else {
        // If there are thoughts, include them in the response
        user.thoughts = thoughts; // Update the user object with thoughts
        return res.json({ user });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  
  
  
  
  
  




  // Controller logic for creating a new user
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  // Controller logic for updating a user by ID
  updateUserById: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  // Controller logic for deleting a user by ID
  deleteUserById: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  // Add other user-related controllers as needed
};

module.exports = userController;
