const list = document.querySelector(".ul");
const listItem = document.querySelectorAll(".ul > li");

function removeClass() {
  listItem.forEach((item) => {
    item.classList.remove("selected");
  });
}

list.addEventListener("click", function (event) {
  if (event.ctrlKey || event.metaKey) {
    // используем комбинацию клавиш, чтобы выделить элементы, даем им класс
    event.target.classList.add("selected");
  } else {
    // сбрасываем выделенные элементы
    removeClass();
    event.target.classList.add("selected");
  }
});
