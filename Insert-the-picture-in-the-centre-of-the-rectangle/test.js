const field = document.querySelector(".field");

const ball = document.querySelector(".ball");

function showCenterpiece(elem, wrap) {
  elem.style.position = "absolute";

  const wrapWidth = wrap.offsetWidth / 2;
  const wrapHeight = wrap.offsetHeight / 2;

  const elemWidth = elem.offsetWidth / 2;
  const elemHeight = elem.offsetHeight / 2;

  elem.style.top = `${wrapHeight - elemHeight}px`;
  elem.style.left = `${wrapWidth - elemWidth}px`;
}

showCenterpiece(ball, field);
