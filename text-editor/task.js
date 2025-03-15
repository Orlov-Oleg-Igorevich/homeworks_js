let textArea = document.getElementById('editor');
let card = document.querySelector('.card');
let deleteButton = document.createElement('button');
deleteButton.innerHTML = '<b>Очистить содержимое</b>';
card.append(deleteButton);

deleteButton.onclick = (event) => {
  localStorage.removeItem('textAreaValue');
  textArea.value = '';
}

textArea.oninput = (event) => {
  localStorage.setItem('textAreaValue', event.target.value);
}

window.onload = () => {
  let value = localStorage.getItem('textAreaValue');
  if (value) {
    textArea.value = value;
  }
}