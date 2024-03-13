$(document).ready(function () {
    const queryString = window.location.search;
    if (queryString) {
        const param = new URLSearchParams(queryString);

        const postData = {
            title: param.get('title'),
            category: param.get('category'),
            content: param.get('content'),
            date: new Date(param.get('date')).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })
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
    }
});
