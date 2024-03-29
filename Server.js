const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');


// connect to mongodb
// username: dbUser
// password: 12345
const dbURI = 'mongodb+srv://dbUser:12345@atlascluster.xplzxgp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';
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

// login route (POST)
app.post('/Login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username });

        // If user is not found or password is incorrect, render login page with error message
        if (!user || user.password !== password) {
            return res.render('Login', { errorMessage: 'Invalid username or password' });
        }

        // If user exists and password is correct, redirect to the home page
        res.redirect('/'); // Redirect to the home page

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
app.get('/Signup', function(req, res) {
    res.render('Signup', { errorMessage: null }); // Pass null as errorMessage initially
});


app.get("/Login", function(req, res) {
    res.render("Login", { errorMessage: null }); // Pass null as errorMessage initially
});

// Route to serve MovieInformation.html with custom title
app.get('/MovieInformation.html', (req, res) => {
    // Extract the title from the query parameter
    const title = req.query.title || 'DefaultTitle';
    // Construct the file path based on the title
    const filePath = path.join(__dirname, 'MovieInformation.html');
    // Send the HTML file
    res.sendFile(filePath);
});

// admin route
app.get("/Admin", function(req, res) {
    res.sendFile(__dirname + "/HTML/Admin.html");
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/HTML/404.html");
});

