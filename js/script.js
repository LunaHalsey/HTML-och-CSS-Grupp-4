// script for popup div on contact page

// script.js
const openButton = document.getElementById("openButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
    popup.style.display = "block";
    closeButton.focus(); // Set focus on the close button when the pop-up opens
});

closeButton.addEventListener("click", () => {
    closePopup();
});

// Close the pop-up when clicking outside the pop-up
window.addEventListener("click", (event) => {
    if (event.target == popup) {
        closePopup();
    }
});

// Close the pop-up when the Enter key is pressed on the close button
// closeButton.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         closePopup();
//     }
// });

// Close the pop-up when the Escape key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});

function closePopup() {
    popup.style.display = "none";
    openButton.focus(); // Return focus to the "Open Pop-up" button when closing the pop-up
}