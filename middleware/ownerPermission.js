function ownerPermission(req, res, next) {
    if (req.user.role !== 'staff') {
        console.log(req.user)
        return res.status(403).json({ message: 'Access Denied 1' });
    }
    next();
}

module.exports = ownerPermission;
