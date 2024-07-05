// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    city: { type: String },
    balance: { type: Number, default: 0 },
    // Add any other fields as needed
});

module.exports = mongoose.model('Customer', customerSchema);
