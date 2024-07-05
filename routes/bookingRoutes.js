// routes/bookingRoutes.js
const express = require('express');
const passport = require('passport');
const {
    createBooking,
    updateBooking,
    deleteBooking,
    getBookingsForLocation
} = require('../controllers/bookingController');
const authenticateToken = require('../middleware/authenticateToken');
const ownerPermission = require('../middleware/ownerPermission');

const router = express.Router();

// Create a new booking
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    createBooking
);

// Update a booking by ID
router.put(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    updateBooking
);

// Delete a booking by ID
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    deleteBooking
);

// Get all bookings for user's location
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    authenticateToken,
    ownerPermission,
    getBookingsForLocation
);

module.exports = router;
