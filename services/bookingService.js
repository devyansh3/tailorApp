// services/bookingService.js
const bookingDAO = require('../dao/bookingDAO');
const customerService = require('./customerService');

// Function to create a new booking
exports.createBooking = async (bookingData) => {
    // Extract customer details from bookingData
    const { customer, ...bookingDetails } = bookingData;

    // Check if the customer already exists by ID
    let existingCustomer = await customerService.getCustomerById(customer._id);

    // If customer doesn't exist, create a new customer
    if (!existingCustomer) {
        const newCustomerData = {
            name: customer.name,
            contactNumber: customer.contactNumber,
            city: customer.city,
            // Add other fields as needed
        };
        existingCustomer = await customerService.createCustomer(newCustomerData);
    }

    // Add customer ID to booking details
    bookingDetails.customer = existingCustomer._id;

    // Create the booking
    const newBooking = await bookingDAO.createBooking(bookingDetails);

    return newBooking;
};

// Function to update a booking by ID
exports.updateBooking = async (id, updateData) => {
    return await bookingDAO.updateBooking(id, updateData);
};

// Function to delete a booking by ID
exports.deleteBooking = async (id) => {
    return await bookingDAO.deleteBooking(id);
};

// Function to get all bookings for a location
exports.getBookingsForLocation = async (locationId) => {
    return await bookingDAO.getBookingsForLocation(locationId);
};
