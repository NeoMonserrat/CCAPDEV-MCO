function showMovieInfo(movieTitle) {
    window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
}


document.addEventListener("DOMContentLoaded", function() {
    const movieTitle = localStorage.getItem("movieTitle");
    
    // Checking if title is null
    if (movieTitle) {
        const movieData = getMovieData(movieTitle);
        
        if (movieData) {
            document.getElementById('movie-title').innerText = movieData.title;
            document.getElementById("release-date").innerText = `Release Date: ${movieData.year}`;
            document.getElementById("director").innerText = `Director: ${movieData.director}`;
            document.getElementById("cast").innerText = `Cast: ${movieData.cast.join(", ")}`;
            document.getElementById("synopsis").innerText = `Synopsis: ${movieData.synopsis}`;
        } else {
            alert("Movie not found");
            window.location.href = 'Home.html';
            document.getElementById('movie-title').innerText = ``;
            document.getElementById("release-date").innerText = ``;
            document.getElementById("director").innerText = ``;
            document.getElementById("cast").innerText = ``;
            document.getElementById("synopsis").innerText = ``;
        }
    } else {
        alert("Movie not found");
        window.location.href = 'Home.html';
        document.getElementById('movie-title').innerText = ``;
        document.getElementById("release-date").innerText = ``;
        document.getElementById("director").innerText = ``;
        document.getElementById("cast").innerText = ``;
        document.getElementById("synopsis").innerText = ``;
    }
});


function getMovieData(movieTitle) {
    // Dummy data for demonstration
    const movies = {
        "Hereditary": {
            title: "Hereditary",
            year: "2023",
            director: "Ari Aster",
            cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
            synopsis: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets."
        },
        "Stranger Things":{
            title: "Stranger Things",
            year: "2023",
            director: "The Duffer Brothers",
            cast: ["Millie Bobbi Brown", "Sadie Sink"],
            synopsis: "Whirlwing of mysteries are about to happen"
        },
    };

    return movies[movieTitle];
}



