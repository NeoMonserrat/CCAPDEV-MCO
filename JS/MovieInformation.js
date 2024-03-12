function showMovieInfo(movieTitle) {
    window.location.href = `MovieInformation.html?title=${encodeURIComponent(movieTitle)}`;
}

function verifyTitle(movieTitle) {
    const movieData = getMovieData(movieTitle);

    if (movieData) {
        const titleElement = document.querySelector('title');
        const movieTitleElement = document.getElementById('movie-title');
        const releaseDateElement = document.getElementById("release-date");
        const directorElement = document.getElementById("director");
        const castElement = document.getElementById("cast");
        const synopsisElement = document.getElementById("synopsis");
        const moviePoster = document.getElementById('movie-poster');
        const reviewTitle = document.getElementById('review-title-text');

        //Background poster
        const movieBackground = document.querySelector('.background-container');
        const compStyle = window.getComputedStyle(movieBackground);
        const currentBackground = compStyle.getPropertyValue('background-image');
        const newBackground = `${currentBackground}, url("https://raw.githubusercontent.com/NeoMonserrat/CCAPDEV-MCO/main/Media/Background/${movieData.title}.jpg")`;

        titleElement.innerText = `${movieData.title} | Netflix Reviews`;
        movieTitleElement.innerText = movieData.title;
        reviewTitle.innerText = movieData.title;
        releaseDateElement.innerText = `Release Date: ${movieData.year}`;
        directorElement.innerText = `Director: ${movieData.director}`;
        castElement.innerText = `Cast: ${movieData.cast.join(", ")}`;
        synopsisElement.innerText = `Synopsis: ${movieData.synopsis}`;
        moviePoster.setAttribute("src", `../Media/${movieData.title}.jpg`);
        movieBackground.style.background = `url("../Media/Background/overlay.png") no-repeat center/cover,` + newBackground + "no-repeat center/cover";
        updateTags(movieData);
        
    } else {
        alert("Movie not found");
        window.location.href = 'Home.html';
        const movieTitleElement = document.getElementById('movie-title');
        const releaseDateElement = document.getElementById("release-date");
        const directorElement = document.getElementById("director");
        const castElement = document.getElementById("cast");
        const synopsisElement = document.getElementById("synopsis");

        movieTitleElement.innerText = ``;
        releaseDateElement.innerText = ``;
        directorElement.innerText = ``;
        castElement.innerText = ``;
        synopsisElement.innerText = ``;
    }
}

function updateRating(stars, index1, submitEnable) {
    const starsOther = document.querySelector('.review-header').querySelectorAll('.star');
    stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        index1 >= index2 ? star.setAttribute("type", "solid") : star.setAttribute("type", "regular")
        if(star.classList.contains("active")) {
            submitEnable = true;
        }
    });

    starsOther.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        index1 >= index2 ? star.setAttribute("type", "solid") : star.setAttribute("type", "regular")
        if(star.classList.contains("active")) {
            submitEnable = true;
        }
    });
    
    //Star rating value
    let rating = index1 + 1;
    document.querySelector('#your-rating').textContent = rating;
    document.querySelector('#your-rating-other').textContent = rating;

    return submitEnable = true;
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
                var noButton = document.querySelector(".no-btn")
                if (deleteModal) {
                    deleteModal.classList.add("show");
                }

                //Closes Delete Modal
                window.onclick = function(event) {
                    if (event.target == deleteModal || event.target == closeModal || event.target == noButton) {
                        deleteModal.classList.remove("show");
                    }
                }

                //Deletes Review
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
    let submitEnable = false;
    const stars = document.querySelector('.movie-rating').querySelectorAll('.star');
    stars.forEach((star, index1) => {
        star.addEventListener("click", function() {
            submitEnable = updateRating(stars, index1, submitEnable); // Update submitEnable
            setSubmitButtonOnclick(submitEnable); // Update onclick attribute based on submitEnable
        });
    })
});

function setSubmitButtonOnclick(submitEnable){
    const submit = document.getElementById('submit-btn');
    if (submitEnable) {
        submit.setAttribute('onclick', 'showReviewModal()');
    } else {
        submit.removeAttribute('onclick');
    }
}

function showReviewModal() {
    var reviewCollection = document.querySelector('.reviews-collection');
    const reviewTemplate = document.getElementById('review-template');
    var reviewModal = document.querySelector(".review-modal");
    var reviewContainer = document.querySelector(".review-modal-container");
    var closeModal = reviewModal.querySelector(".closeModal");
    var submitButton = reviewModal.querySelector("#submit-btn2"); //fix!
    var writtenReview;
    const errorPopup = document.getElementById("errorPopup");
    const checkBox = reviewModal.querySelector('#checkbox');
    const textBox = reviewModal.querySelector('#reviewTextbox');
    if (reviewModal) {
        reviewModal.classList.add("show");
    }

    //Closes Review Modal
    function closeModalHandler(event) {
        if (event.target == reviewModal || event.target == closeModal) {
            reviewModal.classList.remove("show");
            window.removeEventListener("click", closeModalHandler);
        }
    }
    window.addEventListener("click", closeModalHandler);

    submitButton.addEventListener("click", function() {
        if (checkBox.checked) {
            writtenReview = true;
            } else {
            writtenReview = false;
            }

        if(verifyReview(textBox, writtenReview)) {
            closeErrorPopup();
            if(writtenReview) {
                const cloneReview = reviewTemplate.cloneNode(true);
                cloneReview.classList.remove('hide');
                reviewCollection.append(cloneReview);
            } else {
                textBox.value = "";
                console.log("review made");
            }
        } else {
            showErrorPopup();
        }
    });
}

function toggleReviewTextarea() {
    var checkbox = document.getElementById('checkbox');
    var textarea = document.getElementById('reviewTextbox');
    var reviewContainer = document.querySelector(".review-modal-container");
    textarea.style.display = checkbox.checked ? 'block' : 'none';
    reviewContainer.classList.toggle("expand");
  }

// Function to show the error popup
function showErrorPopup() {
    errorPopup.style.display = "block";
}

// Function to close the error popup
function closeErrorPopup() {
    errorPopup.style.display = "none";
}

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

function verifyReview(textBox, isReview) {
    if(textBox.value === "") {
        return !isReview;
    } else {
        return true;
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
            synopsis: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.",
            type: "movies",
            genre: ["Horror", "Thriller"]
        },
        "Stranger Things":{
            title: "Stranger Things",
            year: "2023",
            director: "The Duffer Brothers",
            cast: ["Millie Bobbi Brown", "Sadie Sink"],
            synopsis: "Whirlwing of mysteries are about to happen",
            type: "shows",
            genre: ["Supernatural", "Thriller"]
        },
    };

    return movies[movieTitle];
}

function updateTags(movieData) {
    const movieType = document.querySelectorAll('.tags');
    const movieGenre = document.getElementById('genre');
    const tagsList = document.getElementById('tags-list');
    var allGenres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Supernatural", "Thriller", "Western"];

    // Update tags
    for (let i = 0; i < movieType.length; i++) {
        if (movieData.type == movieType[i].classList[1]) {
            movieType[i].classList.add("show");
            movieType[i].classList.remove("hide");
        }
    }

    // Update genre
    movieData.genre.forEach(function(genre) {
        if (allGenres.includes(genre)) {
            const cloneGenre = movieGenre.cloneNode(true);
            cloneGenre.innerText = genre;
            cloneGenre.classList.add("show");
            cloneGenre.classList.remove("hide");
            tagsList.appendChild(cloneGenre);
        }
    });
}

