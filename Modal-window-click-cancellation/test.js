const linkList = document.querySelectorAll("a");

linkList.forEach((item) => { // каждой ссылке даем класс link
  item.classList.add("link");
});

document.body.addEventListener("click", function (event) {
  if (!event.target.closest(".link")) { // проверяем по классу
    return;
  }

  const answer = confirm("Вы точно хотите перейти по ссылке?"); // модальное окно на ок или отмена

  if (answer === false) { // если отмена, то не переходим
    event.preventDefault();
  }
});
