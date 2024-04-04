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

    $('.delete-button').click(function() {
        const postId = $(this).data('post-id');
        $.ajax({
            url: `/Forums/delete/${postId}`,
            method: 'DELETE',
            success: function(response) {
                console.log('Post deleted:', response);
                // You can add further actions here, such as removing the deleted post from the DOM
            },
            error: function(err) {
                console.error('Error deleting post:', err);
            }
        });
    });

});