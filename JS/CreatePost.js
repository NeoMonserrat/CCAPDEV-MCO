const { posts } = require('./post'); // Adjust the path as needed

// Function to handle form submission
document.getElementById('createpostForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const title = document.getElementById('post_title').value;
    const category = document.getElementById('post_category').value;
    const content = document.getElementById('post_content').value;

       // Create a new User object
       const newUser = new User(username, password, email);
    
       // Perform signup process here...
       console.log('New user signed up:', newUser);
   
       // Optionally, you can redirect the user to another page after signup
       window.location.href = 'login.html';
        
    });

    function post(title, category, content, date){
        this.title = title;
        this.category = category;
        this.content = content;
        this.date = date;
    }

