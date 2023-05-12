const divCollectionPane = document.querySelectorAll(".pane");
const div = document.querySelector(".pane");

divCollectionPane.forEach((item) => {
  const button = document.createElement("button");
  button.classList.add("remove-button");
  button.textContent = "[x]";
  item.append(button);
});

document.addEventListener("click", function (event) {
  if (event.target.className != "remove-button") {
    return;
  }

  let pane = event.target.closest(".pane");
  pane.remove();
  //проверяем на класс
  //ищем родительский элемент с классом
  //находим, закрываем
});
