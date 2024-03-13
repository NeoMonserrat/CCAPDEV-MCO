const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

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
    res.sendFile(__dirname + "/HTML/Signup.html");
})

// movie information route
app.get("/Movieinformation", function(req, res) {
    res.sendFile(__dirname + "/HTML/Signup.html");
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/HTML/404.html");
});

app.listen(3000, function() {
    console.log("Server starting on port 3000");
});
