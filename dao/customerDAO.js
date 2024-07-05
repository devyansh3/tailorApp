// dao/customerDAO.js
const Customer = require('../models/Customer');

// Function to create a new customer
exports.createCustomer = async (customerData) => {
    const newCustomer = new Customer(customerData);
    return await newCustomer.save();
};

// Function to get a customer by ID
exports.getCustomerById = async (customerId) => {
    return await Customer.findById(customerId);
};

// Add other CRUD operations as needed
