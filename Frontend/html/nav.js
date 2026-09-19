const toggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".nav-links");

function setMenu(open) {
    toggle.classList.toggle("active", open);
    links.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open);
}

toggle.addEventListener("click", () => {
    setMenu(!links.classList.contains("active"));
});

// Close after tapping a link
links.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});

// Reset if the window is resized to desktop width
window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
});