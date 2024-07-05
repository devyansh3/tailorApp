const jwt = require('jsonwebtoken');
const secretKey = 'your_jwt_secret_key';

function authenticateToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1] ||
        req.cookies.token;

    console.log(token)
    if (!token) return res.status(401).json({ message: 'Access Denied: No token provided' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
