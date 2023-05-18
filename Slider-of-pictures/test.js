const wrapImage = document.querySelector(".wrap-img");

const wrap = document.querySelector(".wrap");

const image = document.querySelector(".img");

const buttonRight = document.querySelector(".arrow-right");
const buttonLeft = document.querySelector(".arrow-left");

let offset = 0;

buttonRight.addEventListener("click", () => {
  offset += image.offsetWidth;

  if (offset > wrapImage.offsetWidth - wrap.clientWidth) {
    offset = 0;
  }

  wrapImage.style.left = `${-offset}px`;
});

buttonLeft.addEventListener("click", () => {
  offset -= image.offsetWidth;

  if (offset < 0) {
    offset = wrapImage.offsetWidth - wrap.clientWidth;
  }

  wrapImage.style.left = `${-offset}px`;
});
