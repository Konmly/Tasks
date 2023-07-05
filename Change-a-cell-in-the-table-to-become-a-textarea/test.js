const table = document.querySelector(".bagua-table");
table.addEventListener("click", (event) => {
  const target = event.target.closest("td");
  const textArea = event.target.closest("textarea");
  const hasTextArea = table.querySelector("textarea");

  if (!target || textArea || hasTextArea) {
    return;
  }

  const tdChildren = target.innerHTML;
  target.innerHTML = "";

  const buttonOk = document.createElement("button");
  buttonOk.classList.add("button");
  buttonOk.innerText = "OK";

  const buttonCancel = document.createElement("button");
  buttonCancel.classList.add("button");
  buttonCancel.innerText = "Cancel";

  const textareaElement = document.createElement("textarea");
  textareaElement.value = tdChildren;
  textareaElement.classList.add("textarea");

  target.append(textareaElement, buttonOk, buttonCancel);

  const coordsTextAreaElement = textareaElement.getBoundingClientRect();

  buttonCancel.style.top = `${
    coordsTextAreaElement.top + textareaElement.offsetHeight + 5
  }px`;
  buttonCancel.style.left = `${
    coordsTextAreaElement.left + buttonCancel.offsetWidth
  }px`;

  buttonOk.style.top = `${
    coordsTextAreaElement.top + textareaElement.offsetHeight + 5
  }px`;
  buttonOk.style.left = `${coordsTextAreaElement.left}px`;

  textareaElement.focus();

  buttonOk.addEventListener("click", () => {
    target.innerHTML = textareaElement.value;
  });

  buttonCancel.addEventListener("click", () => {
    target.innerHTML = tdChildren;
  });
});
