const wrap = document.querySelector(".house");

const coordsWrap = wrap.getBoundingClientRect();

const wrapText = document.querySelector(".roof");

wrap.addEventListener("mouseover", ({ target, currentTarget }) => {
  // мы нашли свойства объекта через фигурные скобки
  let { tooltip } = target.dataset; // text

  if (!tooltip) {
    // если не равно dataset.tooltip то другие элементы не покажет
    tooltip = currentTarget.dataset.tooltip;
  }

  const tooltipElement = document.createElement("div"); // создали элемент div
  tooltipElement.classList.add("tooltipElement"); // дали ему класс
  tooltipElement.textContent = tooltip; // добавили свойство для чтения
  document.body.appendChild(tooltipElement); // добавили подсказку в документ

  const coordsElement = tooltipElement.getBoundingClientRect(); // нашли координаты

  tooltipElement.style.left = `${
    coordsElement.left + wrap.offsetWidth / 2 - tooltipElement.offsetWidth / 2 // поставили подсказку по центру
  }px`;
});

wrap.addEventListener("mouseout", () => {
  const tooltipElement = document.querySelector(".tooltipElement"); // находим классы с tooltipElement

  if (tooltipElement) {
    // удаляем их после ухода мышки
    tooltipElement.remove();
  }
});
