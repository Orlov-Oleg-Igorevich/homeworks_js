'use strict'

function isVisible(elem) {
  let elemCoords = elem.getBoundingClientRect();
  if (elemCoords.top < document.documentElement.clientHeight) return true;
  else return false;
}

function advent(event) {
  let reveal = document.querySelectorAll('[class="reveal"]');
  for (let rev of reveal) {
    if (isVisible(rev)) {
      rev.classList.add('reveal_active');
    }
  }
}

document.addEventListener('scroll', advent);
advent();