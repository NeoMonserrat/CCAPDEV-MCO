document.getElementById('movie-collection').addEventListener("click", function(e) {
    const clicked = e.target.closest('.container');
   
    if(clicked) {
        const movieTitle = clicked.dataset.title;
        localStorage.setItem("movieTitle", movieTitle)
        window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
    }
});
