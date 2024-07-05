const Joi = require('joi');

const addUserValidation = {
    body: Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('admin', 'staff', 'accountant').required(), // Adjusted to match your user roles
        location: Joi.string().min(2).max(100).required(),
    })
};


const updateUserValidation = {
    body: Joi.object({
        username: Joi.string().min(3).max(30),
        password: Joi.string().min(6),
        role: Joi.string().valid('admin', 'staff', 'accountant'), // Adjusted to match your user roles
        location: Joi.string().min(2).max(100),
    })
};


module.exports = {
    addUserValidation,
    updateUserValidation
};
