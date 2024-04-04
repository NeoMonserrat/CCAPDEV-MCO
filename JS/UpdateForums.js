$(document).ready(function () {
    // Make an AJAX request to fetch posts
    $.get('/Admin/UpdateForums', function (posts) {
        posts.forEach(function (post) {
            const newPost = $(`
                <div class="post">
                    <h3><a href="#">${post.post_title}</a></h3>
                    <p>${post.post_content}</p>
                    <br>
                    <p class="date">${post.post_date}</p>
                    <button class="delete-button" data-post-id="${post._id}">Delete</button>
                </div>
            `);

            switch (post.post_category) {
                case 'General':
                    $('.general-discussion').append(newPost);
                    break;
                case 'Movies':
                    $('.movies-discussion').append(newPost);
                    break;
                case 'TvShows':
                    $('.tv-shows-discussion').append(newPost);
                    break;
                default:
                    $('.general-discussion').append(newPost);
                    break;
            }
        });
    });

    // Use event delegation to handle click on dynamic elements
    $(document).on('click', '.delete-button', function() {
        const postId = $(this).data('post-id');
        $.ajax({
            url: `/Admin/UpdateForums/delete/${postId}`,
            method: 'DELETE',
            success: function(response) {
                console.log('Post deleted:', response);
            },
            error: function(err) {
                console.error('Error deleting post:', err);
            }
        });
    });
});
