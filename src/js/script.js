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
    A.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback" class="cards">`
    )
}
function cardTurnB() {
    B.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback" class="cards">`
    )
}
function cardTurnC() {
    C.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback" class="cards">`
    )
}
function cardTurnD() {
    D.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback" class="cards">`
    )
}
function cardTurnE() {
    E.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback" class="cards">`
    )
}
function cardTurnF() {
    F.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback" class="cards">`
    )
}