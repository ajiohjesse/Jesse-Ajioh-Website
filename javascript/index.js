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
window.addEventListener("click", e => {
  if (e.target.dataset.id === "open") {
    aside.classList.add("show");
  } else if (e.target.dataset.id === "close") {
    aside.classList.remove("show");
  } else {
    aside.classList.remove("show");
  }
});
//end toggle menu

//dynamic year on on footer
const yearEl = document.getElementById("year");
const year = new Date().getFullYear();
yearEl.textContent = year;
//end dynamic year
