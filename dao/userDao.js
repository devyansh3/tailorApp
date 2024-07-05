const User = require('../models/User');

class UserDao {
    async create(data) {
        const user = new User(data);
        return await user.save();
    }

    async find() {
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }

    async updateOne(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteOne(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserDao();
