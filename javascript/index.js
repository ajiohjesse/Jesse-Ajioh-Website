//toggle menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
  aside.classList.add("show");
});
closeMenu.addEventListener("click", () => {
  aside.classList.remove("show");
});
//end toggle menu
