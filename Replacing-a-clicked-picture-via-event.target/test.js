const largeImg = document.querySelector(".large-img"); // большая картинка

const listImg = document.querySelector(".thumbs");

listImg.addEventListener("click", (e) => {
  e.preventDefault();

  const event = e.target.closest("a");

  if (!event) {
    return;
  }

  largeImg.src = event.href;
});
