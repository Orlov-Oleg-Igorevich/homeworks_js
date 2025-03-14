'use strict'

async function getValute() {
  let response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  let responseJson = await response.json();
  let loader = document.getElementById('loader');
  loader.classList.remove('loader_active');
  let listValute = document.getElementById('items');
  listValute.innerHTML = '';
  for (let key in responseJson["response"]["Valute"]) {
    let newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.innerHTML = `<div class="item__code">
                                ${key}
                            </div>
                            <div class="item__value">
                                ${responseJson["response"]["Valute"][key]["Value"]}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>`
    listValute.append(newItem);
  }
}

getValute();