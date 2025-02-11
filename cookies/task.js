'use strict'

let cookieImg = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed');
let currentCountClick = +clickerCounter.textContent;
let timeLastClick = null;


cookieImg.onclick = () => {
    currentCountClick += 1;
    clickerCounter.textContent = currentCountClick;
    if(cookieImg.width == 200) {
        cookieImg.width += 20;
        cookieImg.heigth += 20;
    } else {
        cookieImg.width -= 20;
        cookieImg.heigth -= 20;
    }
    if(currentCountClick >= 2) {
        clickerSpeed.textContent = 1 / (Date.now() - timeLastClick) * 1000;
    }
    timeLastClick = Date.now();
}