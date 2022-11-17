let valtozo1
let valtozo2

let tarolo = [1, 1, 2, 2, 3, 3];

let card1 = document.querySelector('.js-mi1').value = tarolo[0];
let card2 = document.querySelector('.js-mi2').value = tarolo[1];
let card3 = document.querySelector('.js-mi3').value = tarolo[2];
let card4 = document.querySelector('.js-mi4').value = tarolo[3];
let card5 = document.querySelector('.js-mi5').value = tarolo[4];
let card6 = document.querySelector('.js-mi6').value = tarolo[5];

// CARD SHUFFLE FUNCTION
function shuffler(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }
}

console.log(shuffler(tarolo));