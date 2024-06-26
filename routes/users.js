// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to create a new user
router.post('/', async (req, res) => {
  try {
    const { username, password, permits, publishedDate, rating } = req.body;
    const user = new User({
      username,
      password,
      permits,
      publishedDate: new Date(publishedDate),
      rating
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Example route for GET users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
