const wrapImg = document.querySelector(".wrap-img");

const wrap = document.querySelector(".wrap");

const img = document.querySelector(".img");

const container = document.querySelector(".container");

const buttonRight = document.querySelector(".arrow-right");
const buttonLeft = document.querySelector(".arrow-left");

let offset = 0;

buttonRight.addEventListener("click", function () {
  offset = offset + img.offsetWidth;

  if (offset > wrapImg.offsetWidth - wrap.clientWidth) {
    offset = 0;
  }

  wrapImg.style.left = `${-offset}px`;
});

buttonLeft.addEventListener("click", function () {
  offset = offset - img.offsetWidth;

  if (offset < 0) {
    offset = wrapImg.offsetWidth - wrap.clientWidth;
  }

  wrapImg.style.left = `${-offset}px`;
});
