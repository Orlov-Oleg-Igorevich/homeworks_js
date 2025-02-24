let rotatorList = document.querySelectorAll('.rotator');

function advent(event) {
  for (let rotator of rotatorList) {
    let activeRotator = rotator.querySelector('.rotator__case_active');
    activeRotator.classList.remove('rotator__case_active');
    activeRotator = activeRotator.nextElementSibling;
    if (!activeRotator) activeRotator = rotator.firstElementChild;
    activeRotator.classList.add('rotator__case_active');
    if (activeRotator.dataset.speed) {
      if (activeRotator.dataset.color) {
        activeRotator.style.color = activeRotator.dataset.color;
      }
      setTimeout(document.onclick, activeRotator.dataset.speed);
    } else {
      setTimeout(document.onclick, 1000);
    }
  }
}

document.onclick = advent;
advent();