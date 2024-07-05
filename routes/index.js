const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;
