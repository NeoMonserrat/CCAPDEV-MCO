document.getElementById('container').addEventListener("click", function(e) {
    const clicked = e.target.closest('.movie');
    const titleLink = e.target.closest('h2 span');
    const imageLink = e.target.closest('.movie img');
    
    if(clicked) {
        const movieTitle = clicked.dataset.title;
        localStorage.setItem("movieTitle", movieTitle)
        
        window.onclick = function(e) {
            if (e.target == titleLink || e.target == imageLink) {
                window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
            }
        }
    }
});

document.getElementById('container').addEventListener("click", function(e) {
    const clicked = e.target.closest('.show');
    const titleLink = e.target.closest('h2 span');
    const imageLink = e.target.closest('.show img');
    if(clicked) {
        const movieTitle = clicked.dataset.title;
        localStorage.setItem("movieTitle", movieTitle)
        
        window.onclick = function(e) {
            if (e.target == titleLink || e.target == imageLink) {
                window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
            }
        }
    }
});
