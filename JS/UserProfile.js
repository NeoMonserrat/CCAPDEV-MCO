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

function showChangeUsernameModal() {
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="username-change-modal">
            <div class="modal-content">
                <div class="close-container">
                    <span class="close-icon" onclick="closeChangeUsernameModal()">&times;</span>
                </div>
                <h2>Change Username</h2>
                <input type="text" id="newUsername" placeholder="Enter your new username">
                <button onclick="confirmChangeUsername()">Confirm</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function confirmChangeUsername() {
    const newUsername = document.getElementById("newUsername").value;
    if (newUsername.trim() !== "") {
        document.querySelector('.username').textContent = newUsername;
    }
    closeChangeUsernameModal();   
}

function closeChangeUsernameModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}

function showChangePasswordModal() {
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="password-change-modal">
            <div class="modal-content">
                <div class="close-container">
                    <span class="close-icon" onclick="closeChangePasswordModal()">&times;</span>
                </div>
                <h2>Change Password</h2>
                <input type="password" id="newPassword" placeholder="Enter your new password">
                <input type="password" id="confirmNewPassword" placeholder="Confirm your new password">
                <button onclick="confirmChangePassword()">Confirm</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function confirmChangePassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;
    
    if (newPassword.trim() !== "" && newPassword === confirmNewPassword) {
        document.querySelector('.password').textContent = '*'.repeat(newPassword.length);
        closeChangePasswordModal();
    } else {
        alert("Passwords do not match. Please try again.");
    }
}

function closeChangePasswordModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}

function showChangeProfilePicModal() {
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="profile-pic-change-modal">
            <div class="modal-content">
                <div class="close-container">
                    <span class="close-icon" onclick="closeChangeProfilePicModal()">&times;</span>
                </div>
                <h2>Change Profile Picture</h2>
                <input type="file" id="profilePicInput" accept="image/*">
                <button onclick="confirmChangeProfilePic()">Upload</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeChangeProfilePicModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}

function confirmChangeProfilePic() {
    const profilePicInput = document.getElementById("profilePicInput");
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newProfilePicSrc = event.target.result;
            document.querySelector('.profile-picture').src = newProfilePicSrc;
            closeChangeProfilePicModal();
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
}







