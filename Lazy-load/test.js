function isVisible(elem) {
  return (
    window.scrollY + elem.getBoundingClientRect().top <
    window.scrollY + document.documentElement.clientHeight
  );
}

function showVisible() {
  for (const img of document.querySelectorAll("img")) {
    const realSrc = img.dataset.src;
    if (!realSrc || !isVisible(img)) {
      continue;
    }

    if (isVisible(img)) {
      img.src = realSrc;

      img.dataset.src = "";
    }
  }
}

window.addEventListener("scroll", showVisible);
showVisible();
