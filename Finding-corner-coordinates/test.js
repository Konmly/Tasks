const elem = document.querySelector(".wrap");
const coords = elem.getBoundingClientRect();
const allElementStyles = getComputedStyle(elem); // показывает  значения всех CSS-свойств элемента
const elemBorderWidth = allElementStyles.borderWidth;

const coordsTopLeftOuterCorner = `${coords.top}px` + ":" + `${coords.left}px`; // нашли левый внешний угол
console.log(coordsTopLeftOuterCorner);

const bottomLeftOuterCornerX = `${coords.top + elem.offsetHeight}px`; // нижний внешний левый угол X
const bottomLeftOuterCornerY = `${coords.left}px`; // нижний внешний левый угол Y

const bottomLeftOuterCorner =
  bottomLeftOuterCornerX + ":" + bottomLeftOuterCornerY;
console.log(bottomLeftOuterCorner); // нижний внешний левый угол

const innerTopLeftCornerX = `${coords.top + parseInt(elemBorderWidth)}px`; // внутренний левый угол X
const innerTopLeftCornerY = `${coords.left + parseInt(elemBorderWidth)}px`; // внутренний левый угол Y

const innerTopLeftCorner = innerTopLeftCornerX + ":" + innerTopLeftCornerY; // внутренний левый угол
console.log(innerTopLeftCorner);

const innerBottomLeftCornerX = `${
  coords.top + elem.offsetHeight - parseInt(elemBorderWidth)
}px`; // внутренний нижний левый угол X
const innerBottomLeftCornerY = `${coords.left - parseInt(elemBorderWidth)}px`; // внутренний нижний левый угол Y

const innerBottomLeftCorner =
  innerBottomLeftCornerX + ":" + innerBottomLeftCornerY; // внутренний нижний левый угол
console.log(innerBottomLeftCorner);
