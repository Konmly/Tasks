const button = document.querySelector(".button");
const wrapText = document.querySelector(".wrap-text");

function showHideItem() {
  wrapText.style.display = "none";
}

button.addEventListener("click", showHideItem);
