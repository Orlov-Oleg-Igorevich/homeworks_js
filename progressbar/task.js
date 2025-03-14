'use strict'

const progress = document.getElementById( 'progress' );
// progress.value = 0.7;
let form = document.getElementById('form');

form.onsubmit = (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.upload.onprogress = (event) => {
    progress.value = (event.loaded / event.total).toFixed(1);
  }
  xhr.upload.onload = (event) => {
    alert("Данные успешно загружены!");
  }
  xhr.upload.onerror = (event) => {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  }
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(form);
}
