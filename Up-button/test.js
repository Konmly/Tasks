const matrix = document.querySelector(".matrix");
const button = document.querySelector(".arrow-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight) {
    // если не выходим за высоту окна, то кнопки не видно
    button.style.display = "block";
  } else {
    // если вышли за высоту окна она появляется
    button.style.display = "none";
  }

  button.addEventListener("click", () => {
    window.scrollTo({
      // метод позволяющий прокрутить элемент на определённое количество пикселей
      top: 0,
      behavior: "smooth",
    });
  });
});
