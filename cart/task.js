let listControlMinus = document.querySelectorAll('.product__quantity-control_dec');
let listControlPlus = document.querySelectorAll('.product__quantity-control_inc');
let listSubmitAdd = document.querySelectorAll('.product__add');
let basket = document.querySelector('.cart__products');


for (let control of listControlPlus) {
  control.onclick = (event) => {
    let counter = control.previousElementSibling;
    counter.textContent = parseInt(counter.textContent) + 1;
  }
}

for (let control of listControlMinus) {
  control.onclick = (event) => {
    let counter = control.nextElementSibling;
    if (parseInt(counter.textContent) > 1) {
      counter.textContent = parseInt(counter.textContent) - 1;
    }
  }
}

for (let submit of listSubmitAdd) {
  submit.onclick = (event) => {
    let target = event.target;
    let img = target.closest('.product__controls').previousElementSibling;
    let product = target.closest('.product');
    let counter = parseInt(product.querySelector('.product__quantity-value').textContent);
    let existingProduct = basket.querySelector(`[data-id="${product.dataset.id}"]`);
    let targetImg;
    let targetTop;
    let targetLeft;
    if (!existingProduct) {
      basket.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product.dataset.id}">
                                                <img class="cart__product-image" src="${img.src}">
                                                <div class="cart__product-count">${counter}</div>
                                                <a href="#" class="task__remove">&times;</a>
                                              </div>`)
      existingProduct = basket.lastChild;
      targetImg = existingProduct.querySelector('.cart__product-image');
      targetTop = targetImg.getBoundingClientRect().top + window.scrollY;
      targetLeft = targetImg.getBoundingClientRect().left + window.scrollX;
      existingProduct.style.display = 'none';
    } else {
      basket.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product.dataset.id}">
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${counter + parseInt(existingProduct.querySelector('.cart__product-count').textContent)}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>`)
      existingProduct.replaceWith(basket.lastChild);
      existingProduct = basket.querySelector(`[data-id="${product.dataset.id}"]`);
      targetImg = existingProduct.querySelector('.cart__product-image');
      targetTop = targetImg.getBoundingClientRect().top + window.scrollY;
      targetLeft = targetImg.getBoundingClientRect().left + window.scrollX;
    }
    let currentTop = img.getBoundingClientRect().top + window.scrollY;
    let currentLeft = img.getBoundingClientRect().left + window.scrollX;
    let copyImg = img.cloneNode(true);
    copyImg.style.position = 'absolute';
    copyImg.style.left = currentLeft + 'px';
    copyImg.style.top = currentTop + 'px';
    document.body.append(copyImg);
    let intervalId = setInterval(() => {
      let copyTop = copyImg.getBoundingClientRect().top + window.scrollY;
      let copyLeft = copyImg.getBoundingClientRect().left + window.scrollX;
      if (Math.abs(targetTop - copyTop) < (Math.abs(targetTop - currentTop) / 20) &&
          Math.abs(targetLeft - copyLeft) < (Math.abs(targetLeft - currentLeft) / 20)) {
        copyImg.style.left = targetLeft + 'px';
        copyImg.style.top = targetTop + 'px';
        copyImg.remove();
        existingProduct.style.display = '';
        clearInterval(intervalId);
      }
      copyImg.style.left = copyLeft + Math.abs(targetLeft - currentLeft) / 20 + 'px';
      copyImg.style.top = copyTop - Math.abs(targetTop - currentTop) / 20 + 'px';
    }, 25);
    existingProduct.querySelector('.task__remove').onclick = (event) => {
      event.target.closest('.cart__product').remove();
      event.preventDefault();
    }
  }
}