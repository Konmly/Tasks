const divCollectionPane = document.querySelectorAll(".pane");

divCollectionPane.forEach((item) => {
  const button = document.createElement("button");
  button.classList.add("remove-button");
  button.textContent = "[x]";
  item.append(button);

  button.addEventListener("click", function () {
    item.style.display = "none";
  });
});
