// Website loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("M K CONTRACTORS Website Loaded");
});


// Smooth scrolling for menu links
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// WhatsApp contact button
function openWhatsApp() {
    window.open(
        "https://wa.me/91XXXXXXXXXX",
        "_blank"
    );
}


// Footer year update
let year = document.getElementById("year");
if (year) {
    year.innerHTML = new Date().getFullYear();
}
