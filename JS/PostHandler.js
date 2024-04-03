$(document).ready(function () {
    // Get the post ID from the URL
    const postId = window.location.pathname.split('/').pop();

    // Make an AJAX request to fetch a single post
    $.get('/Post/' + postId, function (post) {
        // Check if post is not null or undefined
        if (post) {
            // Append the new post to a container element
            $('.posts-container').append(newPost);
        } else {
            // Handle the case where the post is not found
            $('.posts-container').append('<p>Post not found</p>');
        }
    });
});
