// middleware/ownerPermission.js

function ownerPermission(req, res, next) {
    const userRole = req.user.role;

    switch (userRole) {
        case 'admin':
            next();
            break;
        case 'accountant':
        case 'staff':
            if (req.method === 'GET') {
                next();
            } else {
                res.status(403).json({ message: 'Access Denied. Insufficient permissions.' });
            }
            break;
        default:
            res.status(403).json({ message: 'Access Denied. Insufficient permissions.' });
            break;
    }
}

function locationPermission(req, res, next) {
    const userRole = req.user.role;
    const userLocation = req.user.location;
    const requestedLocation = req.body.location || req.params.location || req.query.location;

    if (userRole === 'admin') {
        next();
    } else {
        if (requestedLocation === userLocation) {
            next();
        } else {
            res.status(403).json({ message: 'Access Denied. You can only modify bookings for your own location.' });
        }
    }
}

module.exports = { ownerPermission, locationPermission };
