const bookingService = require('../services/bookingService');

// Function to create a new booking
exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = await bookingService.createBooking(bookingData);

        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Function to update a booking by ID
exports.updateBooking = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedBooking = await bookingService.updateBooking(id, updateData);
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Function to delete a booking by ID
exports.deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBooking = await bookingService.deleteBooking(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Function to get all bookings for user's location
exports.getBookingsForLocation = async (req, res) => {
    const location = req.query.location;
    try {
        const bookings = await bookingService.getBookingsForLocation(location);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};