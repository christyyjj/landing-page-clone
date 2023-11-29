function toggleMenu() {
  const nav = document.querySelector(".nav-bar");
  const hamburger = document.querySelector("div.hamburger");
  nav.classList.toggle("hamburger");
  hamburger.classList.toggle("active");
}

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
