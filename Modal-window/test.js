const buttonForm = document.querySelector(".button-form");
const modalWindow = document.querySelector(".wrap");
const buttonOk = document.querySelector(".button-ok");
const buttonCancel = document.querySelector(".button-cancel");
const inputText = document.querySelector(".input-text");

buttonForm.addEventListener("click", () => {
  modalWindow.style.display = "block";
  modalWindow.style.position = "absolute";

  modalWindow.style.top = `${
    document.documentElement.clientHeight / 2 - modalWindow.offsetHeight / 2
  }px`;
  modalWindow.style.left = `${
    document.documentElement.clientWidth / 2 - modalWindow.offsetWidth / 2
  }px`;

  document.body.style.background = "rgba(167, 46, 24, 0.8)";

  inputText.focus();
});

buttonOk.addEventListener("click", () => {
  alert(inputText.value);
  modalWindow.style.display = "none";
  document.body.style.background = "";
});

inputText.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    alert(inputText.value);
    modalWindow.style.display = "none";
    document.body.style.background = "";
  }
});

modalWindow.addEventListener("keydown", (event) => {
  if (event.code === "Tab" && !event.classList.contains(".wrap")) {
    event.preventDefault();
  }
});

buttonCancel.addEventListener("click", () => {
  alert(null);
  modalWindow.style.display = "none";
  document.body.style.background = "";
});
