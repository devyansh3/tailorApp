// middleware/ownerPermission.js

function ownerPermission(req, res, next) {
    const userRole = req.user.role;
    console.log(req.user)

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

function locationPermission(req, res, next) {
    const userRole = req.user.role;
    const userLocation = req.user.location;
    const requestedLocation = req.body.location || req.params.location;

    console.log(userLocation + "<- usr location token", +  requestedLocation + "<- requested location")

    // Allow admin for all locations
    if (userRole === 'admin') {
        next();
    } else {
        // For staff and accountant, allow operations only on their own location
        if (requestedLocation === userLocation) {
            next();
        } else {
            res.status(403).json({ message: 'Access Denied. You can only modify bookings for your own location.' });
        }
    }
}

module.exports = {
    ownerPermission,
    locationPermission
};
