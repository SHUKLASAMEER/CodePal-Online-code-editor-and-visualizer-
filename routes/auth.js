const express = require('express');
const MongooseUser = require('../models/user');
const FileUser = require('../models/userFile');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Helper: validate strong password
function isStrongPassword(password) {
  if (!password || password.length < 8) return false;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  return hasUpper && hasLower && hasDigit && hasSpecial;
}

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic presence validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'Please fill in username, email and password.'
      });
    }

    // Strong password validation
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters and include uppercase, lowercase, digit and special character.'
      });
    }

    // Check if user already exists
    let existingUser = null;
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      existingUser = await MongooseUser.findOne({ $or: [{ email }, { username }] });
    } else {
      existingUser = await FileUser.findOne({ email }) || await FileUser.findOne({ username });
    }
    if (existingUser) {
      return res.status(400).json({
        message: 'User already registered with this email or username.'
      });
    }

    // Create new user (use MongoDB if available, otherwise file-based)
    let user;
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      user = new MongooseUser({ username, email, password });
      await user.save();
    } else {
      user = new FileUser({ username, email, password });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '24h' }
    );

    // Set session
    req.session.userId = user._id || user._id;
    req.session.username = user.username;

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error('Registration error:', error);
    console.error('Validation errors:', error.errors);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, digit and special character.'
      });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = (email || '').trim().toLowerCase();
    // Find user by email (stored lowercase in DB)
    let user = null;
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      user = await MongooseUser.findOne({ email: normalizedEmail });
    } else {
      user = await FileUser.findOne({ email: normalizedEmail });
    }
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '24h' }
    );

    // Set session
    req.session.userId = user._id;
    req.session.username = user.username;

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Could not log out' });
    }
    res.json({ message: 'Logout successful' });
  });
});

// Get current user
router.get('/me', (req, res) => {
  if (req.session.userId) {
    res.json({
      user: {
        id: req.session.userId,
        username: req.session.username
      }
    });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

module.exports = router;
