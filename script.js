const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");
const btn = document.querySelector(".viewWork");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
btn.addEventListener("click", () => {
    alert("Comming Soon! ⚠️");
});
