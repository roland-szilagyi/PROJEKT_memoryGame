// KÁRTYA ÉRTÉKEK
let cardsValues = ["A", "B", "C", "D", "E", "F"];

// GYÜJTŐ TÖMBÖK
let pushBox1 = [];
let pushBox2 = [];

// KÁRTYA KEVERŐ
let cardsShuffle = cardsValues
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log("Megkevert pakli sorrendje: ",cardsShuffle)

// ÉRTÉKEK BETÖLTÉSE A DOBOZOKBA
let atalakit = ertek => 
`<div class="${ertek}  cards"></div>`
let tömbMegoldas = cardsShuffle.map(atalakit)
                                .join('\n')

// ÈRTÈKEK BETÖLTÈSE A HTML-BE
document.querySelector('main').innerHTML = tömbMegoldas

// ÈRTÈKEK VÀLTOZÒKBAN
let A = document.querySelector('.A')
let B = document.querySelector('.B')
let C = document.querySelector('.C')
let D = document.querySelector('.D')
let E = document.querySelector('.E')
let F = document.querySelector('.F')

// KÀRTYÀK MEGJELENÌTÈSE (HÀTOLDAL)
function showCardBack(x) {
    x.innerHTML = (
        `<img src="./src/assets/img/cardBackB.svg" alt="cardfront" class="cards">`
    )
}
showCardBack(A);
showCardBack(B);
showCardBack(C);
showCardBack(D);
showCardBack(E);
showCardBack(F);

// ESEMÈNY FIGYELÖ - KÀRTYÀK MEGJELENÌTÈSE (ELEJE)
A.addEventListener('click', cardTurnA)
B.addEventListener('click', cardTurnB)
C.addEventListener('click', cardTurnC)
D.addEventListener('click', cardTurnD)
E.addEventListener('click', cardTurnE)
F.addEventListener('click', cardTurnF)

// KÀRTYÀK MEGJELENÌTÈSE (ELEJE)
function cardTurnA() {
    document.querySelector('.A').classList.add('activeX')
    A.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback" class="cards">`
    )
    cardALoad();
}
function cardTurnB() {
    B.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback" class="cards">`
    )
    cardBLoad();
}
function cardTurnC() {
    document.querySelector('.C').classList.add('activeX')
    C.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback" class="cards">`
    )
    cardCLoad();
}
function cardTurnD() {
    D.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback" class="cards">`
    )
    cardDLoad();
}
function cardTurnE() {
    E.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback" class="cards">`
    )
    cardELoad();
}
function cardTurnF() {
    F.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback" class="cards">`
    )
    cardFLoad();
}

/* ---------- SECTION2 ---------- */

// KÀRTYA ÈRTÈKEK PUSH-OLÀSA TÖMBÖKBE
function cardALoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("1")
    }

    else if ( pushBox1 == "1" ) {
        pushBox1 = Array("1")
    }

    else {
        pushBox2.push("1")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardBLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("6")
    }

    else if ( pushBox1 == "6" ) {
        pushBox1 = Array("6")
    }

    else {
        pushBox2.push("6")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardCLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("2")
    }

    else if ( pushBox1 == "2" ) {
        pushBox1 = Array("2")
    }

    else {
        pushBox2.push("2")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardDLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("5")
    }

    else if ( pushBox1 == "5" ) {
        pushBox1 = Array("5")
    }

    else {
        pushBox2.push("5")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardELoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("3")
    }

    else if ( pushBox1 == "3" ) {
        pushBox1 = Array("3")
    }

    else {
        pushBox2.push("3")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardFLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("4")
    }

    else if ( pushBox1 == "4" ) {
        pushBox1 = Array("4")
    }

    else {
        pushBox2.push("4")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

// ELLENÖRZÖ FÜGGVÈNY - MEGVANNAK-E A PÀROK
function ellenorzo() {
    if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
        let eredmeny = Number(pushBox1) + Number(pushBox2)      // number eredmeny

        if ( eredmeny == 7 ) {
            hit = true;
            console.log(hit, "Megtaláltad a párt")
            document.querySelector('.js-uzenet').innerHTML = "Megtaláltad a párt"
        }
        else {
            hit = false
            console.log(hit, "Nem találtad meg a párt")
            
            setTimeout(Timer, 1000)
            function Timer() {

                document.querySelector('.activeX').innerHTML = (
                    `<img src="./src/assets/img/cardBackB.svg" alt="cardback" class="cards">`
                )
            }
        }
        pushBox1.length = 0;
        pushBox2.length = 0;
    }
}