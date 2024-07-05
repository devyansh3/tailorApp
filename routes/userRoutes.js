const express = require('express');
const passport = require('passport');
const {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    updateUserValidation
} = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');
const ownerPermission = require('../middleware/ownerPermission');

const router = express.Router();

// Get all users
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    getUsers
);

// Get user by ID
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    getUser
);

// Update user by ID
router.put(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    updateUser
);

// Delete user by ID
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    deleteUser
);

module.exports = router;
