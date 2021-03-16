"use strict";
const remainingTimeEl = document.querySelector(".time");
const text = document.querySelector(".text");

const calcTime = () => {
  const openDate = new Date(2021, 3, 25, 7, 10);
  const now = Date.now();

  const dif = openDate - now;

  const days = Math.trunc(dif / 86400000);

  const hours = Math.trunc(
    dif / 3600000 > 23 ? (dif / 3600000) % 24 : dif / 3600000
  );
  const minutes = Math.trunc(
    dif / 60000 > 59 ? (dif / 60000) % 60 : dif / 60000
  );
  const seconds = Math.trunc(
    dif / 1000 > 59 ? (dif / 1000) % 60 : dif / 1000
  ).toLocaleString();

  const remainingTime = `${dateFormat(days)}:${dateFormat(hours)}:${dateFormat(
    minutes
  )}:${dateFormat(seconds)}`;
  remainingTimeEl.innerHTML = remainingTime;
  if (dif <= 0) {
    remainingTimeEl.textContent = "We are open!";
    text.textContent = "";
  }
  return remainingTimeEl;
};

const dateFormat = (date) => {
  if (date < 10) date = `0${date}`;
  return date;
};
calcTime();
window.setInterval(calcTime, 1000);
