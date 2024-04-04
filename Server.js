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
const postRoutes = require('./src/routes/postRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

// connect to mongodb
// username: dbUser
// password: 12345
const dbURI = 'mongodb+srv://dbUser:12345@atlascluster.xplzxgp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

mongoose.connect(dbURI)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
  })

app.use(express.static(__dirname));

// Set EJS as view engine
app.set('view engine', 'ejs');

// Directory for EJS files
app.set('views', path.join(__dirname, 'src/views'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))


// Use route files
app.use('/Signup', signupRoutes);
app.use('/Login', loginRoutes);
app.use('/CreatePost', createpostRoutes);
app.use('/Forums', forumRoutes);
app.use('/Post', postRoutes)
app.use('/Admin', adminRoutes)

router.get('/', async (req, res) => {
    const loggedInUsername = req.session.username;

    // Check if the user is logged in
    if (!loggedInUsername) {
        // If not logged in, redirect to the login page
        res.sendFile(__dirname + "/HTML/index.html");
    }

    try {
        // Render the UserProfile page with the logged-in username
        res.render('UserProfile', { loggedInUsername });

    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).send('Internal Server Error'); // Send an error response
    }
});

// movies route
app.get("/Movies", function(req, res) {
    res.sendFile(__dirname + "/HTML/Movies.html");
})

// tv shows route
app.get("/TvShows", function(req, res) {
    res.sendFile(__dirname + "/HTML/TV Shows.html");
})

// movie information route
app.get("/MovieInformation", function(req, res) {
    res.sendFile(__dirname + "/HTML/MovieInformation.html");
})

// about us route
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

// Route to serve MovieInformation.html with custom title
app.get('/MovieInformation.html', (req, res) => {
    // Extract the title from the query parameter
    const title = req.query.title || 'DefaultTitle';
    // Construct the file path based on the title
    const filePath = path.join(__dirname, '/HTML/MovieInformation.html');
    // Send the HTML file
    res.sendFile(filePath);
});

//404 page route
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/HTML/404.html");
});

