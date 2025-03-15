'use strict'

let form = document.getElementById('signin__form');
let signin = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let blockUserId = document.getElementById('user_id');

let signinBtn = document.getElementById('signin__btn');
signinBtn.onclick = (event) => {
  event.preventDefault();
  (async function auth() {
    let response = await fetch("https://students.netoservices.ru/nestjs-backend/auth", {
      method: 'POST',
      body: new FormData(form),
    });
    let responseJSON = await response.json();
    let auth = responseJSON["success"];
    if (!auth) {
      alert("Неверный логин/пароль");
    } else {
      localStorage.setItem('id', responseJSON['user_id']);
      authorizationVerification();
    }
  })();
  form.reset();
}

function authorizationVerification() {
  let id = localStorage.getItem('id');
  if (id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    blockUserId.textContent = id;

    let delAuth = document.createElement('button');
    delAuth.textContent = 'Деавторизоваться';
    delAuth.className = 'delbutton';
    welcome.insertAdjacentElement('afterend', delAuth);
    delAuth.onclick = (event) => {
      localStorage.removeItem('id');
      signin.classList.add('signin_active');
      welcome.classList.remove('welcome_active');
      delAuth.remove();
    }
  }
}

authorizationVerification();