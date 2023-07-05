const ul = document.querySelector(".tree");

const li = ul.querySelectorAll("li");

li.forEach((item) => {
  const span = document.createElement("SPAN");
  span.classList.add("wrap-list-hide");
  item.prepend(span); // добавили перед тегом span
  span.append(span.nextSibling); // добавили после тега span
});

ul.addEventListener("click", (event) => {
  const children = event.target.closest("ul").querySelector("ul"); // у li, что мы нашли находим родителя, и у родителя ul внутри

  if (!event.target.classList.contains("wrap-list-hide")) {
    return;
  }

  children.hidden = !children.hidden; // показать и скрыть элемент
});
