// kártya keverö
function reShuffle() {
    // kártya értékek
    let cardsValues = [1, 1, 2, 2, 3, 3]
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
}

reShuffle()

// gyüjtö tömbök
let pushBox1 = [];
let pushBox2 = [];

/* -------------------------------------------------- */





// ellenörzö függvény, hogy van-e már 2 szám a tömbben
function ellenorzo() {
    if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
        console.log("megvan a két szám")
        if ( pushBox1[0] === pushBox2[0] ) {
            console.log("A két szám ugyanaz!")
            pushBox1.length = 0;
            pushBox2.length = 0;
        }
        else {
            console.log("A két szám nem ugyanaz!")
        }
        pushBox1.length = 0;
        pushBox2.length = 0;
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

// klikkre a kártya száma a gyüjtökbe töltödik
// vagy ebbe vagy abba
function card1Load() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push(cardsShuffle[0])
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
    else {
        pushBox2.push(cardsShuffle[5])
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}