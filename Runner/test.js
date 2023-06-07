const slider = document.querySelector(".slider");

const thumb = document.querySelector(".thumb");

const coordsSlider = slider.getBoundingClientRect(); // координаты блока слайдера

const sliderWidth = slider.offsetWidth; // ширина блока слайдер

function onMousemove(event) {
  if (
    event.pageX >= coordsSlider.left &&
    event.pageX <= coordsSlider.right - thumb.offsetWidth
  ) {
    // условие, что бегунок ездит только в ширине блока слайдер
    thumb.style.left = `${event.pageX - coordsSlider.left}px`;
  }
}

thumb.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", onMousemove);
});

thumb.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", onMousemove);
});
