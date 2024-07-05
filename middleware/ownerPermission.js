// middleware/ownerPermission.js

function ownerPermission(req, res, next) {
    const userRole = req.user.role;

    switch (userRole) {
        case 'admin':
            // Allow admin users to proceed for all operations
            next();
            break;
        case 'accountant':
        case 'staff':
            // Allow accountant and staff only for read operations (GET)
            if (req.method === 'GET') {
                next();
            } else {
                res.status(403).json({ message: 'Access Denied. Insufficient permissions.' });
            }
            break;
        default:
            // For any other roles or unauthorized users
            res.status(403).json({ message: 'Access Denied. Insufficient permissions.' });
            break;
    }
}

module.exports = ownerPermission;
