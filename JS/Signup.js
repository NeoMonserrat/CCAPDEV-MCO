const { users } = require('./user');

// Function to handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const email = document.getElementById('yourEmail').value;
    const username = document.getElementById('yourUser').value;
    const password = document.getElementById('yourPass').value;

    // Check if the username or email already exists
    const isExistingUser = users.some(user => user.username === username || user.email === email);

    if (isExistingUser) {
        // If username or email already exists, display an error message
        alert("Username or email already exists");
        return; // Stop further execution
    }

    // Create a new User object
    const newUser = new User(username, password, email);
    
    console.log('New user signed up:', newUser);

    window.location.href = 'login.html';
});

function User(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}
