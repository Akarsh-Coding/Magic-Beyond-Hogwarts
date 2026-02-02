let lastScrollY = 0;
const scrollLimit = 45;
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let searchImg = document.querySelector(".Search-img");
let searchInput = document.querySelector(".Search-input");
let searchBtn = document.querySelector(".Search-btn");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current < scrollLimit) {
        header.style.transform = "translateY(0)";
    } else if (current > lastScroll) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    if (header.style.transform == "translateY(-100%)") {
        navbar.style.display = "grid";
        // console.dir(navbar)
    } else {
        navbar.style.display = "none";
    }

    lastScroll = current;
});

window.addEventListener("click", () => {
    searchImg.style.display = "none"
    searchInput.style.transform = "translateY(0)"
    searchBtn.style.transform = "translateY(0)"
})