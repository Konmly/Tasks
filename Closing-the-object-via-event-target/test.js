const panesList = document.querySelectorAll(".pane");

panesList.forEach((item) => {
  const button = document.createElement("button");
  button.classList.add("remove-button");
  button.textContent = "[x]";
  item.append(button);
});

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-button")) {
    return;
  }

  let pane = event.target.closest(".pane");
  pane.remove();
  //проверяем на класс
  //ищем родительский элемент с классом
  //находим, закрываем
});
