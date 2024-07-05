exports.formatResponse = (status, data, message = '') => {
    return { status, data, message };
};

exports.ObjectId = (id) => {
    return mongoose.Types.ObjectId(id);
};
