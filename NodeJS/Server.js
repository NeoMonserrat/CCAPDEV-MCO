const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'CCAPDEV-MCO')));
 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/index.html"));
});

// movies route
app.get("/Movies", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/Movies.html"));
})

// tv shows route
app.get("/TvShows", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/TV Shows.html"));
})

// forums route
app.get("/Forums", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/Forums.html"));
})

// help route
app.get("/Help", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/Help.html"));
})

// create post route
app.get("/Createpost", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/CreatePost.html"));
})

// accountuser profile
app.get("/UserProfile", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/UserProfile.html"));
})

// signup route
app.get("/Signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/Signup.html"));
})

app.listen(3000, function() {
    console.log("Server starting on port 3000");
});