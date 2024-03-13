$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const postData = {
        title: urlParams.get('title'),
        category: urlParams.get('category'),
        content: urlParams.get('content'),
        date: new Date(urlParams.get('date')).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })
    };

    const newPost = $(`
    <div class="post">
        <h3><a href="#">${postData.title}</a></h3>
        <p>${postData.content}</p>
        <br>
        <p class="date">${postData.date}</p>
    </div>
`);

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
            $(".general-discussion").append(newPost);
            break;
    }
});