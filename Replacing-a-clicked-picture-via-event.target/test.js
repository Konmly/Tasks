const largeImg = document.querySelector(".large-img"); // большая картинка

const listImg = document.querySelector(".thumbs");

listImg.addEventListener("click", (e) => {
  e.preventDefault();

  const link = e.target.closest("a");

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
