// ÈRTÈKEK VÀLTOZÒKBAN
let A1 = document.querySelector('.A1')
let A2 = document.querySelector('.A2')
let B1 = document.querySelector('.B1')
let B2 = document.querySelector('.B2')
let C1 = document.querySelector('.C1')
let C2 = document.querySelector('.C2')
let D1 = document.querySelector('.D1')
let D2 = document.querySelector('.D2')
let E1 = document.querySelector('.E1')
let E2 = document.querySelector('.E2')
let F1 = document.querySelector('.F1')
let F2 = document.querySelector('.F2')

// ELLENÖRZÖ FÜGGVÈNY - MEGVANNAK-E A PÀROK
function controller() {
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

// ESEMÈNY FIGYELÖ - KÀRTYÀK FELFEDÈSE
A1.addEventListener('click', cardTurnA1)
function cardTurnA1() {
    A1.classList.add('active')
    A1.innerHTML = (
        `<img src="./src/assets/img/cardA.svg" alt="cardback">`
    )
    cardLoadA1()
}
A2.addEventListener('click', cardTurnA2)
function cardTurnA2() {
    A2.classList.add('active')
    A2.innerHTML = (
        `<img src="./src/assets/img/cardA.svg" alt="cardback">`
    )
    cardLoadA2()
}
B1.addEventListener('click', cardTurnB1)
function cardTurnB1() {
    B1.classList.add('active')
    B1.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback">`
    )
    cardLoadB1()
}
B2.addEventListener('click', cardTurnB2)
function cardTurnB2() {
    B2.classList.add('active')
    B2.innerHTML = (
        `<img src="./src/assets/img/card2.svg" alt="cardback">`
    )
    cardLoadB2()
}
C1.addEventListener('click', cardTurnC1)
function cardTurnC1() {
    C1.classList.add('active')
    C1.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback">`
    )
    cardLoadC1()
}
C2.addEventListener('click', cardTurnC2)
function cardTurnC2() {
    C2.classList.add('active')
    C2.innerHTML = (
        `<img src="./src/assets/img/cardK.svg" alt="cardback">`
    )
    cardLoadC2()
}
D1.addEventListener('click', cardTurnD1)
function cardTurnD1() {
    D1.classList.add('active')
    D1.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback">`
    )
    cardLoadD1()
}
D2.addEventListener('click', cardTurnD2)
function cardTurnD2() {
    D2.classList.add('active')
    D2.innerHTML = (
        `<img src="./src/assets/img/cardJOKE.svg" alt="cardback">`
    )
    cardLoadD2()
}
E1.addEventListener('click', cardTurnE1)
function cardTurnE1() {
    E1.classList.add('active')
    E1.innerHTML = (
        `<img src="./src/assets/img/cardQ.svg" alt="cardback">`
    )
    cardLoadE1()
}
E2.addEventListener('click', cardTurnE2)
function cardTurnE2() {
    E2.classList.add('active')
    E2.innerHTML = (
        `<img src="./src/assets/img/cardQ.svg" alt="cardback">`
    )
    cardLoadE2()
}
F1.addEventListener('click', cardTurnF1)
function cardTurnF1() {
    F1.classList.add('active')
    F1.innerHTML = (
        `<img src="./src/assets/img/card5.svg" alt="cardback">`
    )
    cardLoadF1()
}
F2.addEventListener('click', cardTurnF2)
function cardTurnF2() {
    F2.classList.add('active')
    F2.innerHTML = (
        `<img src="./src/assets/img/card5.svg" alt="cardback">`
    )
    cardLoadF2()
}


// KÀRTYA ÈRTÈKEK PUSH-OLÀSA TÖMBÖKBE
function cardLoadA1() {
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
    controller()
}
function cardLoadA2() {
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
    controller()
}
function cardLoadB1() {
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
    controller()
}
function cardLoadB2() {
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
    controller()
}
function cardLoadC1() {
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
    controller()
}
function cardLoadC2() {
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
    controller()
}
function cardLoadD1() {
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
    controller()
}
function cardLoadD2() {
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
    controller()
}
function cardLoadE1() {
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
    controller()
}
function cardLoadE2() {
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
    controller()
}
function cardLoadF1() {
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
    controller()
}
function cardLoadF2() {
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
    controller()
}






function cardTurnA1() {
    A1.classList.add('active')
    let cardName = (A1.classList[0])
    let inner = '<img src="./src/assets/img/card'+cardName+'.svg" alt="cardback">'
    A1.innerHTML = ( inner )
    A1 = "1"
    cardLoad(A1)
    A1 = document.querySelector('.A1')
}