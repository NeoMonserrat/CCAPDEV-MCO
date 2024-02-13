// pass these title, content
function showReview(title, content) {
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="review-modal">
                        
                    
        <div class="review-content-container">
            <div class="review-content-header">
                <div class="review-title">${title}</div>

                <a class="button" onclick="closeReview()"> 
                    <div class="close-icon"> <img src="../Media/Close.png" alt="Close" class="close-icon2"> </div> 
                </a>
            </div>
            <div class="line-divider"></div>
            <div class="review-paragraph">
                ${content}
            </div>    
        </div>  
    </div>
    `;

    document.body.appendChild(modal);
    const closeButton = modal.querySelector('.button');
    closeButton.addEventListener('click', closeReview);

}

function closeReview() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}