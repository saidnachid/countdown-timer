let daysElement = document.querySelector(".days");
let hoursElement = document.querySelector(".hours");
let minutsElement = document.querySelector(".minuts");
let secondsElement = document.querySelector(".seconds");

let date = new Date("nov 30, 2024 23:59:59").getTime();

countDown();

function countDown() {
  let timer = setInterval(() => {
    let currentDate = new Date().getTime();
    let dateDiff = date - currentDate;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutsElement.innerHTML = formatTime(minuts);
    secondsElement.innerHTML = formatTime(seconds);
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
