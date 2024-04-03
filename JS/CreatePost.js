// Function to handle form submission
document.getElementById('createpostForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const title = document.getElementById('post_title').value;
    const category = document.getElementById('post_category').value;
    const content = document.getElementById('post_content').value;
    const text = document.getElementById('post_text').value;

    });

    function post(title, category, content, date){
        this.title = title;
        this.category = category;
        this.content = content;
        this.text = text;
        this.date = date;
    }
