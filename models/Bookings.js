// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', },
    location: { type: String, required: true },
    measurements: {
        jacket: { type: String, required: true },
        trouser: { type: String, required: true },
        shirt: { type: String, required: true },
    },
    specifications: { type: String },
    remarks: {
        jacket: { type: String },
        trouser: { type: String },
        shirt: { type: String },
    },
    summary: { type: String },
    fabrics: [{ type: String }],
    trialDate: { type: Date },
    deliveryDate: { type: Date },
    advancePayment: { type: Number, default: 0 },
    totalAmount: { type: Number },
    status: { type: String, enum: ['Open', 'Closed'], default: 'Open' },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Booking', bookingSchema);
