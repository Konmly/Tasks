const ul = document.querySelector(".tree");

const li = document.querySelectorAll("li");

li.forEach((item) => {
  const span = document.createElement("SPAN");
  span.classList.add(".p");
  item.prepend(span); // добавили перед тегом span
  span.append(span.nextSibling); // добавили после тега span
});

ul.addEventListener("click", function (event) {
  const children = event.target.parentNode.querySelector("ul"); // у li, что мы нашли находим родителся его ul внутри 

  if (event.target.tagName != "SPAN") {
    return;
  }

  children.hidden = !children.hidden; // показать и скрыть элемент
});
