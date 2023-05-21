const staticBox = document.querySelector(".static-block");
const floatingBlock = document.querySelector(".floating-block");

function objectPositioning(block, position, elem) {
  const coords = block.getBoundingClientRect();

  switch (position) {
    case "topLeftCorner":
      elem.style.left = `${coords.left}px`; // левый верхний внутренний угол
      break;

    case "topRightCorner":
      elem.style.top = `${coords.top}px`; // правый верхний  внутренний угол
      elem.style.left = `${
        coords.left + block.offsetWidth - elem.offsetWidth
      }px`;
      break;

    case "bottomRightCorner":
      elem.style.left = `${
        coords.left + block.offsetWidth - elem.offsetWidth
      }px`; // правый нижний внутренний угол
      elem.style.top = `${
        coords.top + block.offsetHeight - elem.offsetHeight
      }px`;
      break;

    case "lowerLeftCorner":
      elem.style.top = `${
        coords.top + block.offsetHeight - elem.offsetHeight
      }px`; // левый нижний внутренний угол
      elem.style.left = `${coords.left}px`;
      break;
    default:
      break;
  }
}
objectPositioning(staticBox, "topRightCorner", floatingBlock);
