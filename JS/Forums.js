$(document).ready(function () {
    // Make an AJAX request to fetch posts
    $.get('/Forums', function (posts) {
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
});