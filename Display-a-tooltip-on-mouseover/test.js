const button = document.querySelector(".button-wrap");

button.addEventListener("mouseover", function (event) {
  const tooltipText = event.target.dataset.hint;

  if (!tooltipText) {
    return;
  }

  const buttonCoords = button.getBoundingClientRect();

  const div = document.createElement("div"); //создаем подсказку
  div.classList.add("hint");
  div.textContent = tooltipText;
  document.body.appendChild(div);

  const hintHeight = div.clientHeight; // высота подсказки

  if (buttonCoords.top >= hintHeight) {
    // условие, если высота больше высоты подсказки, то она появится сверху, если меньше то внизу
    div.style.top = `${buttonCoords.top - div.offsetHeight - 5}px`; //то что с кавычками называется интерполяцией
  } else if (buttonCoords.top < hintHeight) {
    div.style.top = `${buttonCoords.top + button.offsetHeight + 5}px`;
  }
});

button.addEventListener("mouseout", function () {
  const hintElement = document.querySelector(".hint");

  if (hintElement) {
    //ищу свой элемент по классу tooltip, то удалить элемент
    hintElement.remove();
  }
});
