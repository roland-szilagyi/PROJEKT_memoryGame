/* 
2 gyüjtö tömb
1 kártyára kattintva az 1. tömbe irodik az ertek
2 kártyára kattintva a 2. tömbe íródik az érték
összehasonlitja a ket erteket
törli az ertekeket a tömbökböl
minden kezdödik elöröl
*/

// kártya értékek
let cardsValues = [1, 1, 2, 2, 3, 3]

// kártya keverö
let cardsShuffle = cardsValues
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log(cardsShuffle)

// kártyaértékek betöltése a dobozokba
document.querySelector('.js-mi1').innerHTML = cardsShuffle[0]
document.querySelector('.js-mi2').innerHTML = cardsShuffle[1]
document.querySelector('.js-mi3').innerHTML = cardsShuffle[2]
document.querySelector('.js-mi4').innerHTML = cardsShuffle[3]
document.querySelector('.js-mi5').innerHTML = cardsShuffle[4]
document.querySelector('.js-mi6').innerHTML = cardsShuffle[5]

// ellenörzö függvény, hogy van-e már 2 szám a tömbben
function ellenorzo() {
    if ( cardsSum.length == 2 ) {
        // console.log("megvan a két szám")
        if ( cardsSum[0] === cardsSum[1] ) {
            console.log("A két szám ugyanaz!")
        }
        else {
            console.log("A két szám nem ugyanaz!")
        }
        cardsSum.length = 0;
    }
}

// egy kártya kiválasztása
document.querySelector('.js-mi1')
    .addEventListener('click', card1Load)

document.querySelector('.js-mi2')
    .addEventListener('click', card2Load)

document.querySelector('.js-mi3')
    .addEventListener('click', card3Load)

document.querySelector('.js-mi4')
    .addEventListener('click', card4Load)

document.querySelector('.js-mi5')
    .addEventListener('click', card5Load)

document.querySelector('.js-mi6')
    .addEventListener('click', card6Load)

// klikkre a kártya száma a gyüjtöváltozóba töltödik
function card1Load() {
    if ( !cardsSum.includes(cardsShuffle[0]) ) {
    cardsSum.push(cardsShuffle[0])
    console.log("Nem volt benne de beletettük")
    }
    else {
        console.log("Már benne van")
    }
    console.log(cardsSum)
    ellenorzo()
}

function card2Load() {
    if ( !cardsSum.includes(cardsShuffle[1]) ) {
    cardsSum.push(cardsShuffle[1])
    console.log("Nem volt benne de beletettük")
    }
    else {
        console.log("Már benne van")
    }
    console.log(cardsSum)
    ellenorzo()
}

function card3Load() {
    cardsSum.push(cardsShuffle[2])
    console.log(cardsSum)
    ellenorzo()
}

function card4Load() {
    cardsSum.push(cardsShuffle[3])
    console.log(cardsSum)
    ellenorzo()
}

function card5Load() {
    cardsSum.push(cardsShuffle[4])
    console.log(cardsSum)
    ellenorzo()
}

function card6Load() {
    cardsSum.push(cardsShuffle[5])
    console.log(cardsSum)
    ellenorzo()
}


// változó - 2 szám gyüjtöje egy tömbbe
let cardsSum = [];
function cardLoadtoArray() {

}



// függvény - 2 számot tölt egy tömbbe és összehasonlítja

// 1 elem csak 1x töltödik a tömbbe ameddig a tömb kinem ürül