const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
let searchInput = document.getElementById("searchInput");
let patternCards = document.querySelectorAll(".pattern-card");

searchInput.addEventListener("input", function() {
    let searchValue = searchInput.value.toLowerCase();

    patternCards.forEach(function(card) {
        let cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});