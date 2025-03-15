let listCookie = document.cookie.split('; ');
let flag = listCookie.find((cookie) => cookie == 'modalwindow=close');

if (!flag) {
  let modalWindow = document.querySelector('.modal');
let buttonClose = document.querySelector('.modal__close');
modalWindow.classList.add('modal_active');

buttonClose.onclick = (event) => {
  modalWindow.classList.remove('modal_active');
  document.cookie = 'modalwindow=close';
}
}