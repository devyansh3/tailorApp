// dao/bookingDAO.js
const Booking = require('../models/Bookings');

// Function to create a new booking
exports.createBooking = async (bookingData) => {
    const newBooking = new Booking(bookingData);
    return await newBooking.save();
};

// Function to update a booking by ID
exports.updateBooking = async (id, updateData) => {
    return await Booking.findByIdAndUpdate(id, updateData, { new: true });
};

// Function to delete a booking by ID
exports.deleteBooking = async (id) => {
    return await Booking.findByIdAndDelete(id);
};

// Function to get all bookings for a location
exports.getBookingsForLocation = async (locationId) => {
    return await Booking.find({ location: locationId }).populate('customer');
};

// Add other CRUD operations as needed
