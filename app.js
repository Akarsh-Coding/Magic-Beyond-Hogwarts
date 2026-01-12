let lastScrollY = 0;
const scrollLimit = 45;
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current < scrollLimit) {
        header.style.transform = "translateY(0)";
    } else if (current > lastScroll) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = current;
});
