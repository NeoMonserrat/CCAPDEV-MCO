const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');

//connect to mongodb
const dbURI = 'mongodb+srv://Ultiplox:netboxd123@cluster0.vmfdndf.mongodb.net/';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.use(express.static(__dirname));

// Set EJS as view engine
app.set('view engine', 'ejs');

// Set the directory for EJS files
app.set('views', path.join(__dirname, 'HTML'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

//add user through Mongo
// signup route (GET)
app.get("/Signup", function(req, res) {
    res.render("Signup"); // Rendering Signup.ejs
});

// signup route (POST)
app.post('/Signup', async (req, res) => {

    console.log(req.body);
    // Check if the username already exists
    const existingUser = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
    if (existingUser) {
        // Pass the error message to the EJS template
        return res.render('Signup', { errorMessage: 'Username or email already exists' });
    } else if (req.body.password != req.body.repassword) {
            return res.render('Signup', { errorMessage: 'Re-enter password did not match the password' });
    }

    // Create a new user document
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.redirect('/Login'); // Redirect to the login page
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).send('Internal Server Error'); // Send an error response
    }
});



// index route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/HTML/index.html");
});

// movies route
app.get("/Movies", function(req, res) {
    res.sendFile(__dirname + "/HTML/Movies.html");
})

// tv shows route
app.get("/Tvshows", function(req, res) {
    res.sendFile(__dirname + "/HTML/TV Shows.html");
})

// forums route
app.get("/Forums", function(req, res) {
    res.sendFile(__dirname + "/HTML/Forums.html");
})

// help route
app.get("/Help", function(req, res) {
    res.sendFile(__dirname + "/HTML/Help.html");
})

// create post route
app.get("/Createpost", function(req, res) {
    res.sendFile(__dirname + "/HTML/CreatePost.html");
})

// account/user profile
app.get("/UserProfile", function(req, res) {
    res.sendFile(__dirname + "/HTML/UserProfile.html");
})

// signup route
app.get("/Signup", function(req, res) {
    res.render("Signup"); // Rendering Signup.ejs
});

app.get("/Login", function(req, res) {
    res.render("Login"); // Rendering Login.ejs
});

// movie information route
app.get("/Movieinformation", function(req, res) {
    res.sendFile(__dirname + "/HTML/MovieInformation.html");
})

// admin route
app.get("/Admin", function(req, res) {
    res.sendFile(__dirname + "/HTML/Admin.html");
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/HTML/404.html");
});

