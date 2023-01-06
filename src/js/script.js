// kártya értékek
let cardsValues = ["A", "B", "C", "1", "2", "3"]

// kártya keverö
let cardsShuffle = cardsValues
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log(cardsShuffle)

// gyüjtö tömbök
let pushBox1 = [];
let pushBox2 = [];

// function kereso() {
// let i = 0;
// while ( cardsShuffle[i] != "A" ) {
//     i += 1
// }
// cardsShuffle[i]
// }
// kereso()

let A = 0;
while ( cardsShuffle[A] != "A" ) {
    A += 1
}
console.log("A =", A)

document.querySelector()





/* -------------------------------------------------- */

// kártya szelektorok
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

// kártyaértékek betöltése a dobozokba
document.querySelector('.js-mi1').innerHTML = cardsShuffle[0]
document.querySelector('.js-mi2').innerHTML = cardsShuffle[1]
document.querySelector('.js-mi3').innerHTML = cardsShuffle[2]
document.querySelector('.js-mi4').innerHTML = cardsShuffle[3]
document.querySelector('.js-mi5').innerHTML = cardsShuffle[4]
document.querySelector('.js-mi6').innerHTML = cardsShuffle[5]

// ellenörzö függvény - milyen érték van a dobozban?


// ellenörzö függvény - megvannak-e a párok
function ellenorzo() {
    // A1 B2 C3
    if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
        let eredmeny = pushBox1 + pushBox2      // string eredmeny

        if ( ( ( eredmeny === "A1" ) || ( eredmeny === "1A" ) ) ||
            ( ( eredmeny === "B2" ) || ( eredmeny === "2B" ) ) ||
            ( ( eredmeny === "C3" ) || ( eredmeny === "3C" ) ) ) {
            console.log("Megtaláltad a párt")
            pushBox1.length = 0;
            pushBox2.length = 0;
        }
        else {
            console.log("Nem találtad meg a párt")
            pushBox1.length = 0;
            pushBox2.length = 0;
        }
    }
}

// Kártyaváltozás


// klikkre a kártya száma a gyüjtökbe töltödik. vagy ebbe vagy abba
function card1Load() {
    color1Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[0])
    }

    else if ( pushBox1 == cardsShuffle[0] ) {
        pushBox1 = Array(cardsShuffle[0])
    }

    else {
        pushBox2.push(cardsShuffle[0])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

function card2Load() {
    color2Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[1])
    }

    else if ( pushBox1 == cardsShuffle[1] ) {
        pushBox1 = Array(cardsShuffle[1])
    }

    else {
        pushBox2.push(cardsShuffle[1])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

function card3Load() {
    color3Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[2])
    }

    else if ( pushBox1 == cardsShuffle[2] ) {
        pushBox1 = Array(cardsShuffle[2])
    }

    else {
        pushBox2.push(cardsShuffle[2])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

function card4Load() {
    color4Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[3])
    }

    else if ( pushBox1 == cardsShuffle[3] ) {
        pushBox1 = Array(cardsShuffle[3])
    }

    else {
        pushBox2.push(cardsShuffle[3])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

function card5Load() {
    color5Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[4])
    }

    else if ( pushBox1 == cardsShuffle[4] ) {
        pushBox1 = Array(cardsShuffle[4])
    }

    else {
        pushBox2.push(cardsShuffle[4])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

function card6Load() {
    color6Add()
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[5])
    }

    else if ( pushBox1 == cardsShuffle[5] ) {
        pushBox1 = Array(cardsShuffle[5])
    }

    else {
        pushBox2.push(cardsShuffle[5])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

// beszinezi a kiválaszott kártyát 
function color1Add() {
    document.querySelector('.js-mi1').innerHTML = (
        `<img src="./src/assets/img/card1.svg" alt="card1" class="cards">`
    )
}
function color2Add() {
    document.querySelector('.js-mi2').classList.add('color1')
}
function color3Add() {
    document.querySelector('.js-mi3').classList.add('color1')
}
function color4Add() {
    document.querySelector('.js-mi4').classList.add('color1')
}
function color5Add() {
    document.querySelector('.js-mi5').classList.add('color1')
}
function color6Add() {
    document.querySelector('.js-mi6').classList.add('color1')
}

// kiveszi a szint a kiválaszott kartyából
function color1Remove() {
    document.querySelector('.js-mi1').classList.remove('color1')
}
function color2Remove() {
    document.querySelector('.js-mi2').classList.remove('color1')
}
function color3Remove() {
    document.querySelector('.js-mi3').classList.remove('color1')
}
function color4Remove() {
    document.querySelector('.js-mi4').classList.remove('color1')
}
function color5Remove() {
    document.querySelector('.js-mi5').classList.remove('color1')
}
function color6Remove() {
    document.querySelector('.js-mi6').classList.remove('color1')
}