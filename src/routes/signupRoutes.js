const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    console.log(req.body);

    // Check for empty fields
    if (!req.body.username || !req.body.password || !req.body.repassword || !req.body.email) {
        return res.render('Signup', { errorMessage: 'All fields are required' });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
    if (existingUser) {
        return res.render('Signup', { errorMessage: 'Username or email already exists' });
    } else if (req.body.password !== req.body.repassword) {
        return res.render('Signup', { errorMessage: 'Re-entered password did not match' });
    }

    // Create a new user document
    const newUser = new User({
        username: req.body.username,
        password: req.body.password, // Save the password as plain text
        email: req.body.email,
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.redirect('/Login'); // Redirect to the login page
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
