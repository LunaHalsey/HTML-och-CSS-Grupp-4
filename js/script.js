// script for popup div on contact page
// script.js
const openButton = document.getElementById("openButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close the pop-up when clicking outside the pop-up
window.addEventListener("click", (event) => {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});