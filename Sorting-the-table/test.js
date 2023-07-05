function sortTable() {
  const table = document.querySelector(".table");

  const rowsList = Array.from(table.rows).slice(1);

  rowsList.sort((first, second) =>
    first.cells[0].innerHTML > second.cells[0].innerHTML ? 1 : -1
  );

  table.tBodies[0].append(...rowsList);
}

sortTable();
