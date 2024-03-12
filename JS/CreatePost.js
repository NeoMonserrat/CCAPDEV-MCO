$(document).ready(function() {
    var postData = {
        title: "New Post Title",
        category: "General Discussions",
        body: "This is the body of the new post."
    };


    var newPost = `
        <div class="gen-discussion">
            <h3><a href="#">${postData.title}</a></h3>
            <p>${postData.body}</p>
        </div>
    `;

    $(".forum-section:contains('General Discussions')").append(newPost);
});
