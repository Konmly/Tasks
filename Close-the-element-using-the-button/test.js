const panesList = document.querySelectorAll(".pane");

panesList.forEach((item) => {
  const button = document.createElement("button");
  button.classList.add("remove-button");
  button.textContent = "[x]";
  item.append(button);

  button.addEventListener("click", () => {
    item.remove();
  });
});
