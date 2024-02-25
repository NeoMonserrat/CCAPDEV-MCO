document.getElementById('movie-collection').addEventListener("click", function(e) {
    console.log(closest('.movie-container'))
    const clicked = e.target.closest('.movie-container');
   
    if(clicked) {
        const movieTitle = clicked.dataset.title;
        window.location.href = 'MovieInformation.html?title=$[encodeURIComponent(movieTitle)';
    }
});
