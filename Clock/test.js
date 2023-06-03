let intervalId = null;
const time = document.querySelector(".time");

function setClockTick() {
  let clock = new Date();
  time.textContent = clock.toLocaleTimeString();
}

const buttonStart = document.querySelector(".button-start");

function clockStart() {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(setClockTick, 1000);
}

buttonStart.addEventListener("click", clockStart);

const buttonStop = document.querySelector(".button-stop");

function clockStop() {
  if (intervalId === null) {
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
}
buttonStop.addEventListener("click", clockStop);
