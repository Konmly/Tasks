const table = document.querySelector(".grid");

function sortTable(colNum, type) {
  const tbody = table.querySelector("tbody");

  const arr = Array.from(tbody.rows);

  let compare;

  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      default:
        break;
  }

  arr.sort(compare);
  tbody.append(...arr);
}

document.addEventListener("click", function (event) {
  if (event.target.tagName != "TH") {
    return;
  }

  const e = event.target;

  sortTable(e.cellIndex, e.dataset.type, "grid");
});
