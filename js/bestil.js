const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
