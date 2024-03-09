function showMovieInfo(movieTitle) {
    window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
}

function verifyTitle(movieTitle) {
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
}

function updateRating(stars, index1) {
    console.log(index1);
    stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        index1 >= index2 ? star.setAttribute("type", "solid") : star.setAttribute("type", "regular")
    });
    
    //Star rating value
    let rating = index1 + 1;
    document.querySelector('#your-rating').textContent = rating;
}

document.addEventListener("DOMContentLoaded", function() {
    const movieTitle = localStorage.getItem("movieTitle");
    
    //Checking if title is null
    verifyTitle(movieTitle);

    var container = document.querySelector('.reviews-collection');

    container.addEventListener('click', function(event) {

        //Shows Delete Modal
        if (event.target.classList.contains('trash-icon')) {
            var userReview = event.target.closest('.user-review');
            if (userReview) {
                var deleteModal = document.querySelector(".delete-modal");
                var closeModal = document.querySelector(".closeModal");
                if (deleteModal) {
                    deleteModal.classList.add("show");
                }

                //Closes Delete Modal
                window.onclick = function(event) {
                    if (event.target == deleteModal || event.target == closeModal) {
                        deleteModal.classList.remove("show");
                    }
                }

                deleteModal.querySelector('.yes-btn').addEventListener('click', function() {
                    userReview.remove();
                    deleteModal.classList.remove("show");
                    fillUserReview(container);
                });

            }
        }

        //Like Counter
        if (event.target.classList.contains('heart-icon')) {
            const likeContainer = event.target.closest('.heart-container');
            const likeImgContainer = event.target.closest('.heart-icon');
            if (likeContainer) {
                var likeElement = likeContainer.querySelector(".like-counter");
                var likeCount = parseInt(likeElement.textContent);
                if(!likeImgContainer.classList.contains('liked')) {
                    likeElement.textContent = likeCount+1;
                    likeImgContainer.classList.add('liked');
                }
                else {
                    likeImgContainer.classList.remove('liked');
                    likeElement.textContent = likeCount-1;
                }
            }
        }
    });

    //Handles Star Rating
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index1) => {
        star.addEventListener("click", function() {
            updateRating(stars, index1)
        });
    })
});

//Empty User Reviews Placeholder
function fillUserReview(container) {
    var containerLength = container.childElementCount;
    if(containerLength === 0) {
        const placeholder = 
                                "<h1 style='display: flex; justify-content: center; align-items: center; margin-top: 75px;'>" + 
                                    "No one has reviewed this program yet!" + 
                                "</h1>";
        container.innerHTML = placeholder;
    }
}


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



