// Website loading message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");
});

// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// Contact button message
function showMessage() {
    alert("Thank you for contacting M/s K M CONTRACTORS. We will contact you soon.");
}

// Current year auto update (footer ke liye)
const year = document.getElementById("year");
if (year) {
    year.innerHTML = new Date().getFullYear();
}
