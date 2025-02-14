let dropdown = document.querySelector('.dropdown__value');

dropdown.onclick = () => {
  let dropdownUl = document.querySelector('.dropdown__list');
  dropdownUl.classList.toggle('dropdown__list_active');
}

let dropdownItems = document.querySelectorAll('.dropdown__item');

for (let item of dropdownItems) {
  item.onclick = function () {
    event.preventDefault()
    dropdown.textContent = item.textContent;
    dropdown.click();
  }
}