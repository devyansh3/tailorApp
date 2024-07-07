const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('./config/passportConfig');
const routes = require('./routes');
const { ERROR_MESSAGES, STATUS_CODES } = require('./utils/constants.js');


// require('./config/passportConfig')(passport);


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Adjust to match your React frontend's origin
    })
);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/tailorWebApp')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));


app.use('/api', routes);

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);


});
