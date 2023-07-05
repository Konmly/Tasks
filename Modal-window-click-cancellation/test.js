const linkList = document.querySelectorAll("a");
const link = document.querySelector("a");

linkList.forEach((item) => {
  // каждой ссылке даем класс link
  item.classList.add("link");
});

document.body.addEventListener("click", function (event) {
  const link = event.target.closest(".link");

  if (!link) {
    // проверяем по классу
    return;
  }

  const answer = confirm("Вы точно хотите перейти по ссылке?"); // модальное окно на ок или отмена

  event.preventDefault();

  if (answer === true) {
    window.location.href = link.href;
  }
});
