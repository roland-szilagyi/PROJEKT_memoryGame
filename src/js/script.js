// KÁRTYA ÉRTÉKEK
//let cardsValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
let cardsValues = {
    "A" : 1,
    "B" : 2,
    "C" : 3,
    "D" : 4
}

// GYÜJTŐ TÖMBÖK
let pushBox1 = [];
let pushBox2 = [];

// TALÀLAT GYÜJTÖ
let score = 0;
let steps = 0;

// KÁRTYA KEVERŐ
let cardsShuffle = cardsValues
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log("Megkevert pakli sorrendje: ",cardsShuffle)

// ÉRTÉKEK BETÖLTÉSE A DOBOZOKBA
let atalakit = ertek => 
`<div class="${ertek}"></div>`
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
let G = document.querySelector('.G')
let H = document.querySelector('.H')
let I = document.querySelector('.I')
let J = document.querySelector('.J')
let K = document.querySelector('.K')
let L = document.querySelector('.L')

// KÀRTYÀK MEGJELENÌTÈSE (HÀTOLDAL)
/* function showCardBack(x) {
    x.innerHTML = (
        `<img src="./src/assets/img/cardBackB.svg" alt="cardfront">`
    )
}
showCardBack(A);
showCardBack(B);
showCardBack(C);
showCardBack(D);
showCardBack(E);
showCardBack(F);
showCardBack(G);
showCardBack(H);
showCardBack(I);
showCardBack(J);
showCardBack(K);
showCardBack(L);
*/

    // innerHTML = (
    //     `<img src="./src/assets/img/cardBackB.svg" alt="cardfront">`
    // )

// ESEMÈNY FIGYELÖ - KÀRTYÀK MEGJELENÌTÈSE (ELEJE)
A.addEventListener('click', cardTurnA)
B.addEventListener('click', cardTurnB)
C.addEventListener('click', cardTurnC)
D.addEventListener('click', cardTurnD)
E.addEventListener('click', cardTurnE)
F.addEventListener('click', cardTurnF)
G.addEventListener('click', cardTurnG)
H.addEventListener('click', cardTurnH)
I.addEventListener('click', cardTurnI)
J.addEventListener('click', cardTurnJ)
K.addEventListener('click', cardTurnK)
L.addEventListener('click', cardTurnL)

pushBox1[0]

// KÀRTYÀK MEGJELENÌTÈSE (ELEJE)
function cardTurnA() {
    A.classList.add('active')
    A.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback">`
    )
    cardALoad();
}
function cardTurnB() {
    document.querySelector('.B').classList.add('active')
    B.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback">`
    )
    cardBLoad();
}
function cardTurnC() {
    document.querySelector('.C').classList.add('active')
    C.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback">`
    )
    cardCLoad();
}
function cardTurnD() {
    document.querySelector('.D').classList.add('active')
    D.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback">`
    )
    cardDLoad();
}
function cardTurnE() {
    document.querySelector('.E').classList.add('active')
    E.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback">`
    )
    cardELoad();
}
function cardTurnF() {
    document.querySelector('.F').classList.add('active')
    F.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback">`
    )
    cardFLoad();
}
function cardTurnG() {
    document.querySelector('.G').classList.add('active')
    G.innerHTML = (
        `<img src="./src/assets/img/cardA.svg" alt="cardback">`
    )
    cardGLoad();
}
function cardTurnH() {
    document.querySelector('.H').classList.add('active')
    H.innerHTML = (
        `<img src="./src/assets/img/cardA.svg" alt="cardback">`
    )
    cardHLoad();
}
function cardTurnI() {
    document.querySelector('.I').classList.add('active')
    I.innerHTML = (
        `<img src="./src/assets/img/cardQ.svg" alt="cardback">`
    )
    cardILoad();
}
function cardTurnJ() {
    document.querySelector('.J').classList.add('active')
    J.innerHTML = (
        `<img src="./src/assets/img/cardQ.svg" alt="cardback">`
    )
    cardJLoad();
}
function cardTurnK() {
    document.querySelector('.K').classList.add('active')
    K.innerHTML = (
        `<img src="./src/assets/img/card5.svg" alt="cardback">`
    )
    cardKLoad();
}
function cardTurnL() {
    document.querySelector('.L').classList.add('active')
    L.innerHTML = (
        `<img src="./src/assets/img/card5.svg" alt="cardback">`
    )
    cardLLoad();
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
        pushBox1.push("12")
    }

    else if ( pushBox1 == "12" ) {
        pushBox1 = Array("12")
    }

    else {
        pushBox2.push("12")
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
        pushBox1.push("11")
    }

    else if ( pushBox1 == "11" ) {
        pushBox1 = Array("11")
    }

    else {
        pushBox2.push("11")
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
        pushBox1.push("10")
    }

    else if ( pushBox1 == "10" ) {
        pushBox1 = Array("10")
    }

    else {
        pushBox2.push("10")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardGLoad() {
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
function cardHLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("9")
    }

    else if ( pushBox1 == "9" ) {
        pushBox1 = Array("9")
    }

    else {
        pushBox2.push("9")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardILoad() {
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
function cardJLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("8")
    }

    else if ( pushBox1 == "8" ) {
        pushBox1 = Array("8")
    }

    else {
        pushBox2.push("8")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}
function cardKLoad() {
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
function cardLLoad() {
    if ( pushBox1.length == 0 ) {
        pushBox1.push("7")
    }

    else if ( pushBox1 == "7" ) {
        pushBox1 = Array("7")
    }

    else {
        pushBox2.push("7")
    }
    console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
    ellenorzo()
}

// ELLENÖRZÖ FÜGGVÈNY - MEGVANNAK-E A PÀROK
function ellenorzo() {
    if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
        let eredmeny = Number(pushBox1) + Number(pushBox2)      // number eredmeny

        if ( eredmeny == 13 ) {
            hit = true;
            console.log(hit, "Megtaláltad a párt")
            document.querySelector('.js-uzenet').innerHTML = "Megtaláltad a párt"

            document.querySelector('.active').classList.remove('active')
            document.querySelector('.active').classList.remove('active')

            steps += 1;
            document.querySelector('.js-steps').innerHTML = ( `<p>Lépések száma: ${steps}</p>` )

        }

        else {
            hit = false
            console.log(hit, "Nem találtad meg a párt")
            
            setTimeout(Timer, 1000)
            function Timer() {
                document.querySelector('.active').innerHTML = (
                    `<img src="./src/assets/img/cardBackB.svg" alt="cardback">`)
                document.querySelector('.active').classList.remove('active')
            }
            setTimeout(Timer2, 1100)
            function Timer2() {
                document.querySelector('.active').innerHTML = (
                    `<img src="./src/assets/img/cardBackB.svg" alt="cardback">`)
                document.querySelector('.active').classList.remove('active')
            }
            steps += 1;
            document.querySelector('.js-steps').innerHTML = ( `<p>Lépések száma: ${steps}</p>` )
        }
        pushBox1.length = 0;
        pushBox2.length = 0;
    }
}