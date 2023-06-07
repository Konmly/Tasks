const table = document.querySelector(".grid");
const tableHeader = table.querySelector(".table-header");

function sortTable(colNum, type) {
  const tbody = table.querySelector("tbody");

  const arr = Array.from(tbody.rows); //преобразуем в массив коллекцию элементов tbody

  let sortCallback;

  switch (type) {
    case "number":
      sortCallback = (rowA, rowB) => {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        // rowA -строка, cells - ячейка, colNum - столбец, тут мы сравниваем значения числовые
      };
      break;
    case "string":
      sortCallback = (rowA, rowB) => {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? // тут сравниваем значения строковые, если код буквы больше то 1, если меньше то -1
            1
          : -1;
      };
    default: // значение по умолчанию
      break;
  }

  arr.sort(sortCallback); // в массив добавляем отсортированный колбек
  tbody.append(...arr); // в тело лтаблицы добавляем отсортированный массив
}

tableHeader.addEventListener("click", (event) => {
  // по клику на столбец, начинается сортировка
  const target = event.target.closest(".table-header-cell");

  if (!target) {
    return;
  }

  sortTable(target.cellIndex, target.dataset.type);
});
