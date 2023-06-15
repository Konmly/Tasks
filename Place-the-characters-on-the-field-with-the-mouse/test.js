document.addEventListener("mousedown", (e) => {
  const event = e.target;

  if (!event.classList.contains("draggable")) {
    // если не равно классу draggable, то выходим
    return;
  }

  event.style.position = "absolute";
  event.style.zIndex = 11; // даем индекс,чтобы выбирались элементы лежащие друг под другом
  document.body.appendChild(event);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    event.style.left = `${pageX - event.offsetWidth / 2}px`; // повторяем движение мыши, и ставим мыш в центр
    event.style.top = `${pageY - event.offsetHeight / 2}px`;

    if (pageX >= document.body.offsetWidth - event.offsetWidth) {
      // условие, если координаты выходят за ширину экрана, то элемент остается в области экрана
      event.style.left = `${document.body.offsetWidth - event.offsetWidth}px`;
    }
    if (pageY >= document.body.clientHeight) {
      // условие тоже самое если выходят за высоту экрана
      event.style.top = `${document.body.offsetHeight}px`;
    }
    if (pageY <= 0) {
      event.style.top = `${0}px`;
    }
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
  };
});

document.ondragstart = function () {
  return false;
};
