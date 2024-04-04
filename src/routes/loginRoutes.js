const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username });

        // If user is not found or password is incorrect, render login page with error message
        if (!user || user.password !== password) {
            return res.render('Login', { errorMessage: 'Invalid username or password' });
        }

        // If user exists and password is correct, redirect to the home page
        req.session.username = username;
        res.redirect('/'); // Redirect to the home page

    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).send('Internal Server Error'); // Send an error response
    }
});

module.exports = router;