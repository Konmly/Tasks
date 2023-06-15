function isVisible(elem) {
  if (
    window.scrollY + elem.getBoundingClientRect().top < // если прокрутка экрана плюс координата элемента топ
    window.scrollY + document.documentElement.clientHeight // если прокрутка экрана плюс высота окна
  ) {
    return true;
  } else {
    return false;
  }
}

function showVisible() {
  for (let img of document.querySelectorAll("img")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      realSrc += "?nocache=" + Math.random();

      img.src = realSrc;

      img.dataset.src = "";
    }
  }
}

window.addEventListener("scroll", showVisible);
showVisible();
