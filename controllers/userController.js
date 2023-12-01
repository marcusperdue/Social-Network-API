//User Controller
const { User, Thought } = require('../models');


const userController = {
  // Controller logic for getting all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      const usersWithThoughts = [];
  
      for (const user of users) {
        const thoughts = await Thought.find({ username: user.username }).select('-__v');
        user.thoughts = thoughts;
        usersWithThoughts.push(user);
      }
  
      res.json(usersWithThoughts);
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
      const userId = req.params.userId;
  
      // Find the user by userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Delete the user's thoughts based on their username
      await Thought.deleteMany({ username: user.username });
  
      // Now, delete the user
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User and associated thoughts deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  
  

  addFriend: async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

      // Find the user by userId
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the user is already friends with the friendId
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'User is already friends with this friend' });
      }

      // Add the friend to the user's friend list
      user.friends.push(friendId);
      await user.save();

      res.json({ message: 'Friend added successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  removeFriend: async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

      // Find the user by userId
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the user is friends with the friendId
      if (!user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'User is not friends with this friend' });
      }

      // Remove the friend from the user's friend list
      user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
      await user.save();

      res.json({ message: 'Friend removed successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
