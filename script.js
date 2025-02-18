const newYear = "1 Jan 2026";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown(){
    const newYearDate = new Date(newYear);
    const currentYearDate = new Date();

    const totalSeconds = (newYearDate - currentYearDate) / 1000;

    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour= Math.floor(totalSeconds / 3600) % 24;
    const minute = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = day.toString();
    hoursEl.innerHTML = formatTime(hour);
    minutesEl.innerHTML = formatTime(minute);
    secondsEl.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);