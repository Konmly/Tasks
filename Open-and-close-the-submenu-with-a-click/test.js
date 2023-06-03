const list = document.querySelector(".list");
const sublist = document.querySelector(".sublist");
const spriteRightArrow = document.querySelector(".sprite-right-arrow");
const spriteLeftArrow = document.querySelector(".sprite-left-arrow");

list.addEventListener("click", () => {
  spriteRightArrow.classList.toggle("none");
  sublist.classList.toggle("none");
  spriteLeftArrow.classList.toggle("none");
});
