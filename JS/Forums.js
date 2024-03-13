$(document).ready(function() {
    // Get the query string parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    // Get the post data from the query string
    const postData = {
        title: urlParams.get('title'),
        category: urlParams.get('category'),
        content: urlParams.get('content'),
        date: urlParams.get('date')
    };

    // Create a new post element
    const newPost = $("<div class='post'><h3><a href='#'>" + postData.title + "</a></h3><p>" + postData.content + "</p></div>");

    // Append the new post to the correct section based on the category
    switch (postData.category) {
        case "General":
            $(".general-discussion").append(newPost);
            break;
        case "Movies":
            $(".movies-discussion").append(newPost);
            break;
        case "TvShows":
            $(".tv-shows-discussion").append(newPost);
            break;
        default:
            // If category is not recognized, append to General Discussions
            $(".general-discussion").append(newPost);
            break;
    }
});
