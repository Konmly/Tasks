const mouseSprite = document.querySelector(".mouse");

//не забыть включить tabIndex, я добавила в html, но можно и в js, без него не возьмется фокусировка

mouseSprite.addEventListener("click", () => {
  mouseSprite.style.position = "absolute";
});

mouseSprite.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Numpad8":
      mouseSprite.style.top = `${
        mouseSprite.getBoundingClientRect().top - mouseSprite.offsetHeight
      }px`;
      break;

    case "Numpad6":
      mouseSprite.style.left = `${
        mouseSprite.getBoundingClientRect().left + mouseSprite.offsetWidth
      }px`;
      break;

    case "Numpad2":
      mouseSprite.style.top = `${
        mouseSprite.getBoundingClientRect().top + mouseSprite.offsetHeight
      }px`;
      break;

    case "Numpad4":
      mouseSprite.style.left = `${
        mouseSprite.getBoundingClientRect().left - mouseSprite.offsetWidth
      }px`;
      break;
    default:
      break;
  }
});
