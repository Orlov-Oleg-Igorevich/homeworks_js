'use strict'

let timer = document.getElementById('timer');
let timeInSeconds = +timer.textContent;

setTimeout(() => {
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
    }, timeInSeconds * 1000 + 1000);

let timerId = setInterval(() => {
    timeInSeconds -= 1;
    let seconds = timeInSeconds % 3600;
    seconds = String(seconds).length == 1 ? '0' + seconds : seconds;
    let minute = String(Math.floor(timeInSeconds / 60) % 60);
    minute = minute.length == 1 ? '0' + minute : minute;
    let hours = String(Math.floor(timeInSeconds / 3600));
    hours = hours.length == 1 ? '0' + hours : hours;
    timer.textContent = `${hours}:${minute}:${seconds}`
}, 1000);

