function showMovieInfo(movieTitle) {
    window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
}


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const movieTitle = params.get("title");
    const movieData = getMovieData(movieTitle);
    
    if (movieData) {
        document.getElementById("movie-title").innerText = movieData.title;
        document.getElementById("director").innerText = `Director: ${movieData.director}`;
        document.getElementById("cast").innerText = `Cast: ${movieData.cast.join(", ")}`;
        document.getElementById("synopsis").innerText = `Synopsis: ${movieData.synopsis}`;
    } else {
        document.getElementById("movie-title").innerText = "Movie not found";
    }
});

function getMovieData(movieTitle) {
    // Dummy data for demonstration
    const movies = {
        "Hereditary": {
            title: "Hereditary",
            director: "Ari Aster",
            cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
            synopsis: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets."
        },
        "Stranger Things":{
            title: "Stranger Things",
            director: "Han Solo",
            cast: ["Millie Bobbi Brown", "Sadie Sink"],
            synopsis: "Whirlwing of mysteries are about to happen"
        },
    };

    return movies[movieTitle];
}



