function sortTable() {
  const tr = document.querySelector(".tr");

  const table = document.querySelector(".table");

  let arr = Array.from(table.rows).slice(1);

  arr.sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1));

  table.tBodies[0].append(...arr);
}

sortTable();
