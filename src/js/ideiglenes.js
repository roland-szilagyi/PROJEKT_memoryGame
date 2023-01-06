// klikkre a kártya száma a gyüjtökbe töltödik. vagy ebbe vagy abba
function card1Load() {
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



/* ---------- ORIGI COMPLETTE */

// kártya értékek
let cardsValues = ["A", "B", "C", "1", "2", "3"]

// kártya keverö
let cardsShuffle = cardsValues
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log("Megkevert pakli sorrendje: ",cardsShuffle)

// gyüjtö tömbök
let pushBox1 = [];
let pushBox2 = [];

let A = 0;
while ( cardsShuffle[A] != "A" ) {
    A += 1
}
console.log("A =", A)

let ONE = 0;
while ( cardsShuffle[ONE] != "1" ) {
    ONE += 1
}
console.log("1 =", ONE)

function beleA() {
    document.querySelector('.js-mi11').innerHTML = A
    console.log(A)
}

beleA()

/* -------------------------------------------------- */

// kártya szelektorok

document.querySelector('.js-card1')
    .addEventListener('click', cardLoad(0))

document.querySelector('.js-card2')
    .addEventListener('click', cardLoad(1))

document.querySelector('.js-card3')
    .addEventListener('click', cardLoad(2))

document.querySelector('.js-card4')
    .addEventListener('click', cardLoad(3))

document.querySelector('.js-card5')
    .addEventListener('click', cardLoad(4))

document.querySelector('.js-card6')
    .addEventListener('click', cardLoad(5))

// kártyaértékek betöltése a dobozokba
document.querySelector('.js-card1').innerHTML = cardsShuffle[0]
document.querySelector('.js-card2').innerHTML = cardsShuffle[1]
document.querySelector('.js-card3').innerHTML = cardsShuffle[2]
document.querySelector('.js-card4').innerHTML = cardsShuffle[3]
document.querySelector('.js-card5').innerHTML = cardsShuffle[4]
document.querySelector('.js-card6').innerHTML = cardsShuffle[5]

// ellenörzö függvény - milyen érték van a dobozban?


// találat változó (boolean)
let hit

// ellenörzö függvény - megvannak-e a párok
function ellenorzo() {
    // A1 B2 C3
    if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
        let eredmeny = pushBox1 + pushBox2      // string eredmeny

        if ( ( ( eredmeny === "A1" ) || ( eredmeny === "1A" ) ) ||
            ( ( eredmeny === "B2" ) || ( eredmeny === "2B" ) ) ||
            ( ( eredmeny === "C3" ) || ( eredmeny === "3C" ) ) ) {
            hit = true;
            console.log(hit, "Megtaláltad a párt")
        }
        else {
            hit = false
            console.log(hit, "Nem találtad meg a párt")
        }
        pushBox1.length = 0;
        pushBox2.length = 0;
    }
}

function cardLoad(x) {
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[x])
    }

    else if ( pushBox1 == cardsShuffle[x] ) {
        pushBox1 = Array(cardsShuffle[x])
    }

    else {
        pushBox2.push(cardsShuffle[x])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}



//megfordítja a kiválasztott kártyát 
function cardTurn() {
    document.querySelector('.js-mi1').classList.add('d-none')
    document.querySelector('.js-mi11').classList.remove('d-none')
}