const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const secretKey = 'your_jwt_secret_key';

// Register
router.post('/register', async (req, res) => {
    const { username, password, role, location } = req.body;
    try {
        const newUser = new User({ username, password, role, location });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login using LocalStrategy
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (!user) {
            return res.status(401).json({ message: info.message });
        }

        // If authentication succeeds, generate JWT token
        const tokenPayload = {
            _id: user._id,
            username: user.username,
            role: user.role,     // Include user's role
            location: user.location  // Include user's location
        };

        const token = jwt.sign(
            tokenPayload,
            secretKey,
            { expiresIn: '1h' } // Adjust token expiry as needed
        );

        // Set token in cookie or respond as needed
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Logged in successfully', token });

    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('token'); // Clear the token cookie
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
