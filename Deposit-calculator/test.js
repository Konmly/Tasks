const inputDeposit = document.querySelector(".input-deposit");
const selectTIme = document.querySelector(".select-time");
const inputRate = document.querySelector(".input-rate");
const beforePercent = document.querySelector(".before-percent");
const afterPercent = document.querySelector(".after-percent");
const progressAfter = document.querySelector(".progress-after");

let depositResult = 0;
let selectedTime = 3;
let rateResult = 0;

function getResult() {
  //формула выводящая результат с процентами
  return Math.round(
    depositResult * (1 + rateResult * 0.01) ** (selectedTime / 12)
  );
}

function getProgressHeight() {
  //находим ререзультат для высоты
  const amount = getResult();

  return (amount / depositResult) * 100;
}

function setAfterPercent() {
  //выводим результат над красным блоком
  afterPercent.innerText = getResult();
}

function setProgressHeight() {
  //меняем высоту в зависимости от результата ставки
  progressAfter.style.height = `${getProgressHeight()}px`;
}

function setBeforePercent() {
  //выводим результат над зеленым блоком
  beforePercent.innerText = depositResult;
}

inputDeposit.addEventListener("input", (event) => {
  depositResult = Number(event.target.value);

  setBeforePercent();
  setAfterPercent();
  setProgressHeight();
});

selectTIme.addEventListener("change", (event) => {
  selectedTime = Number(event.target.value);

  setBeforePercent();
  setAfterPercent();
  setProgressHeight();
});

inputRate.addEventListener("input", (event) => {
  rateResult = Number(event.target.value);

  setBeforePercent();
  setAfterPercent();
  setProgressHeight();
});

document.addEventListener("DOMContentLoaded", () => {
  // событие вызывается когда готов лояут
  setBeforePercent();
  setAfterPercent();
  setProgressHeight();
});
