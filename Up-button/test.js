const matrix = document.querySelector(".matrix");
const button = document.querySelector(".arrow-top");

window.addEventListener("scroll", () => {
  button.style.display =
    window.pageYOffset >= window.innerHeight ? "block" : "none";
  // если не выходим за высоту окна, то кнопки не видно, если вышли за высоту окна она появляется

  button.addEventListener("click", () => {
    window.scrollTo({
      // метод позволяющий прокрутить элемент на определённое количество пикселей
      top: 0,
      behavior: "smooth",
    });
  });
});
