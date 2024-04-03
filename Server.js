const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Imported route files
const signupRoutes = require('./src/routes/signupRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const forumRoutes = require('./src/routes/forumRoutes');
const createpostRoutes = require('./src/routes/createpostRoutes');

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

// Use route files
app.use('/Signup', signupRoutes);
app.use('/Login', loginRoutes);
app.use('/CreatePost', createpostRoutes);
app.use('/Forums', forumRoutes);

// index route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/HTML/index.html");
});

// movies route
app.get("/Movies", function(req, res) {
    res.sendFile(__dirname + "/HTML/Movies.html");
})

// tv shows route
app.get("/TvShows", function(req, res) {
    res.sendFile(__dirname + "/HTML/TV Shows.html");
})

// forums route
app.get("/Forums", function(req, res) {
    res.sendFile(__dirname + "/Forums");
})

// forums route
app.get("/AboutUs", function(req, res) {
    res.sendFile(__dirname + "/HTML/AboutUs.html");
})

// help route
app.get("/Help", function(req, res) {
    res.sendFile(__dirname + "/HTML/Help.html");
})

// create post route
app.get("/CreatePost", function(req, res) {
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

