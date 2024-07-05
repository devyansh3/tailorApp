const UserDao = require('../dao/userDao');

class UserService {
    async addUser(data) {
        return await UserDao.create(data);
    }

    async getUsers() {
        return await UserDao.find();
    }

    async getUser(id) {
        return await UserDao.findById(id);
    }

    async updateUser(id, data) {
        return await UserDao.updateOne(id, data);
    }

    async deleteUser(id) {
        return await UserDao.deleteOne(id);
    }
}

module.exports = new UserService();
