const hamburger = document.querySelector(".icon_hamburger");
const navMenu = document.querySelector(".topnav_menu");

hamburger.addEventListener("click", () => {
  navMenu.style.display == "" || navMenu.style.display == "none"
    ? (navMenu.style.display = "flex")
    : (navMenu.style.display = "none");
  navMenu.classList.toggle("active");
});
