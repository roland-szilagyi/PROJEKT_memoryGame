/*
let variable1
let variable2

let tarolo = [3, 1, 2, 3, 3, 2];

let card1 = document.querySelector('.js-mi1').value = tarolo[0];
let card2 = document.querySelector('.js-mi2').value = tarolo[1];
let card3 = document.querySelector('.js-mi3').value = tarolo[2];
let card4 = document.querySelector('.js-mi4').value = tarolo[3];
let card5 = document.querySelector('.js-mi5').value = tarolo[4];
let card6 = document.querySelector('.js-mi6').value = tarolo[5];

CARD SHUFFLE FUNCTION
function shuffler(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }
}

START BUTTON
document.querySelector('h2')
    .addEventListener('click', gameStart);
function gameStart() {
    shuffler(tarolo)
}

CARD1 SELECTER
document.querySelector('.js-mi1')
    .addEventListener('click', toVariable);

document.querySelector('.js-mi2')
    .addEventListener('click', toVariable);

document.querySelector('.js-mi3')
    .addEventListener('click', toVariable);

document.querySelector('.js-mi4')
    .addEventListener('click', toVariable);

document.querySelector('.js-mi5')
    .addEventListener('click', toVariable);

document.querySelector('.js-mi6')
    .addEventListener('click', probe);

function toVariable() {
    if ( variable1 === undefined ) {
    variable1 = tarolo[0];
    console.log(variable1);
    }
    else {
        variable2 = tarolo[0];
    }
    console.log(variable1, variable2)
}

MAX 2 KÀRTYA FORDUL FEL
*/




































let variable1
let variable2

document.querySelector('js-mi1')
    .addEventListener('click', fuggveny)

function fuggveny(event) {
    document.querySelector('.main-items').value = 'szöveg'
    event.preve
}