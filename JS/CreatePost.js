$(document).ready(function() {
    // Your post data
    var postData = {
        title: "New Post Title",
        category: "General Discussions",
        body: "This is the body of the new post."
    };

    // Create the HTML for the new post
    var newPost = `
        <div class="gen-discussion">
            <h3><a href="#">${postData.title}</a></h3>
            <p>${postData.body}</p>
        </div>
    `;

    // Append the new post to the "General Discussions" section
    $(".forum-section:contains('General Discussions')").append(newPost);
});
