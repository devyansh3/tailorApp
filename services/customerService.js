// services/customerService.js
const customerDAO = require('../dao/customerDAO');

// Function to create a new customer
exports.createCustomer = async (customerData) => {
    return await customerDAO.createCustomer(customerData);
};

// Function to get a customer by ID
exports.getCustomerById = async (customerId) => {
    return await customerDAO.getCustomerById(customerId);
};

// Add other business logic functions as needed
