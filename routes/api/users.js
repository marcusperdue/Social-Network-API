const router = require('express').Router();
const { User } = require('../../models');

// Error handling middleware
const handleErrors = (res, error) => {
  console.error(error);
  res.status(500).json({ success: false, error: 'Internal server error' });
};

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json({ success: true, data: users });
  } catch (error) {
    handleErrors(res, error);
  }
});

// GET a single user by _id and populate thought and friend data
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('thoughts')
      .populate('friends');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// POST a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// PUT to update a user by _id
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// DELETE a user by _id
router.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});






// POST to add a new friend to a user's friend list
router.post('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: 'User or friend not found' });
    }

    // Check if the friend is already in the user's friends list
    if (user.friends.includes(req.params.friendId)) {
      return res.status(400).json({ message: 'Friend already added' });
    }

    user.friends.push(req.params.friendId);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});


// DELETE to remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.friends.pull(req.params.friendId);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});


module.exports = router;
