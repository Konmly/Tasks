const wrap = document.querySelector(".wrap");

wrap.addEventListener("click", () => {
  wrap.style.display = "none";

  const textAreaElement = document.createElement("textarea");
  textAreaElement.classList.add("wrap");
  textAreaElement.value = wrap.innerHTML;
  wrap.after(textAreaElement);

  textAreaElement.focus();

  textAreaElement.addEventListener("blur", () => {
    wrap.innerHTML = textAreaElement.value;

    textAreaElement.remove();

    wrap.style.display = "";
  });

  textAreaElement.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
      textAreaElement.blur();
    }
  });
});
