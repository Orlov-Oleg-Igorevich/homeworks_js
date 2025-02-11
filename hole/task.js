'use strict'

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let killCounter = document.getElementById('dead');
let missCounter = document.getElementById('lost');

for (let index = 1; index < 10; ++index) {
    let currentHole = getHole(index);
    currentHole.onclick = () => {
        if( currentHole.className.includes( 'hole_has-mole' ) ) {
            killCounter.textContent = +killCounter.textContent + 1;
        } else {
            missCounter.textContent = +missCounter.textContent + 1;
        }

        if( +killCounter.textContent == 10 ) {
            setTimeout(() => {
                alert('Победа!');
                killCounter.textContent = 0;
                missCounter.textContent = 0;
            })
        }
        if( +missCounter.textContent == 5 ) {
            setTimeout(() => {
                alert('Вы проиграли!');
                killCounter.textContent = 0;
                missCounter.textContent = 0;
            })
        }
    }
}
