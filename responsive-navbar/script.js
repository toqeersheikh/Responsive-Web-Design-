const menu = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".sidebar");

const close = document.querySelector(".close-btn");

menu.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

close.addEventListener("click", () => {
  sideBar.style.display = "none";
});
