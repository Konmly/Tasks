function showNotification({ top = 0, right = 0, className, html }) {
  const popUpWindow = document.createElement("div");

  popUpWindow.style.position = "absolute";

  popUpWindow.classList.add(className);

  popUpWindow.style.top = `${top}px`;
  popUpWindow.style.right = `${right}px`;

  popUpWindow.textContent = html;

  document.body.appendChild(popUpWindow);

  setInterval(() => popUpWindow.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello" + i++,
    className: "welcome",
  });
}, 2000);
