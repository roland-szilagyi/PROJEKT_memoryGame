// KÁRTYA ÉRTÉKEK
    let cardsValues = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2"];

// GYÜJTŐ TÖMBÖK
    let pushBox1 = [];
    let pushBox2 = [];

// TALÀLAT GYÜJTÖ
    let score = 0;
    let steps = 0;

// KÁRTYA KEVERŐ
    function start() {
    let cardsShuffle = cardsValues
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    console.log("Megkevert pakli sorrendje: ",cardsShuffle)

        // ÉRTÉKEK BETÖLTÉSE A DOBOZOKBA ÈS KÀRTYÀK KEZDŐ MEGJELENÌTÈSE
            let converse = ertek => 
            `<div class="${ertek}">
                <img src="./src/assets/img/cardBackB.svg" alt="cardfront">
            </div>`
            let Loader = cardsShuffle.map(converse)
                                            .join('\n')
        // ÈRTÈKEK BETÖLTÈSE A HTML-BE
            document.querySelector('main').innerHTML = Loader

        // ÈRTÈKEK VÀLTOZÒKBAN
            let A1 = document.querySelector('.A1'), A2 = document.querySelector('.A2'),
                B1 = document.querySelector('.B1'), B2 = document.querySelector('.B2'),
                C1 = document.querySelector('.C1'), C2 = document.querySelector('.C2'),
                D1 = document.querySelector('.D1'), D2 = document.querySelector('.D2'),
                E1 = document.querySelector('.E1'), E2 = document.querySelector('.E2'),
                F1 = document.querySelector('.F1'), F2 = document.querySelector('.F2')



         // ESEMÈNY FIGYELÖ - KÀRTYÀK FELFEDÈSE
            function eventStart(x) {
                x.addEventListener('click', turnCall)

                function turnCall() {
                    cardTurn(x)
                }
            }

            function cardTurn(x) {
                x.classList.add('active')
                let cardName = (x.classList[0])
                let inner = '<img src="./src/assets/img/card'+cardName+'.svg" alt="cardback">'
                x.innerHTML = (inner)
                cardLoad(x.classList[0])
            }
        
        eventStart(A1), eventStart(A2)
        eventStart(B1), eventStart(B2)
        eventStart(C1), eventStart(C2)
        eventStart(D1), eventStart(D2)
        eventStart(E1), eventStart(E2)
        eventStart(F1), eventStart(F2)

        // KÀRTYA ÈRTÈKEK PUSH-OLÀSA TÖMBÖKBE
            function cardLoad(x) {
                if ( pushBox1.length == 0 ) {
                    pushBox1.push(x)
                }

                else if ( pushBox1 == x ) {
                    pushBox1 = Array(x)
                }

                else {
                    pushBox2.push(x)
                }
                console.log("pushBox1:", pushBox1, "pushBox2:", pushBox2)
                controller()
            }

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
}

start()