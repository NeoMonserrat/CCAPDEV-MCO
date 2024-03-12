$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const category = urlParams.get('category');
    const content = urlParams.get('content');
    const date = urlParams.get('date');

    // Format the date as "Month Day, Year"
    var formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    var newPost = `
        <div class="post">
            <h3>${title}</h3>
            <p>${content}</p>
            <br>
            <p class="date">Date Posted: ${formattedDate}</p>
        </div>
    `;

    if (category === "General") {
        $(".gen-discussion").append(newPost);
    } else if (category === "Movies") {
        $(".movies-discussion").append(newPost);
    } else if (category === "TV Shows") {
        $(".tv-shows-discussion").append(newPost);
    } else {
        $(".gen-discussion").append(newPost);
    }
});
