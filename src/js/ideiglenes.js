// KÁRTYA ÉRTÉKEK
    let cardsValues = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2"];

// GYÜJTŐ TÖMBÖK
    let pushBox1 = [];
    let pushBox2 = [];

// GOMBOK
    let score = 0;
    let steps = 0;

// LÈPÈSEK SZÀMLÀLÒJA
    function stepsNum() {
        steps += 1
        document.querySelector('.js-steps').innerHTML = (`<p class="font-interstate">Steps: ${steps}</p>`)
    }

// IDŐ SZÀMLÀLÒ
    let counter = setInterval(countTimer, 1000);
    let totalSeconds = 0;
    function countTimer() {
        totalSeconds += 1;
        let hour = Math.floor(totalSeconds / 3600);
        let minute = Math.floor((totalSeconds - hour * 3600) / 60);
        let seconds = totalSeconds - (hour * 3600 + minute * 60);
            if ( minute < 10 ) {
                minute = "0"+minute;
            }
            if ( seconds < 10 ) {
                seconds = "0"+seconds;
            }
        document.querySelector('.js-time').innerHTML = minute + ":" + seconds;
        }

// RESTART
    document.querySelector('.js-restart')
        .addEventListener('click', restart)

    function restart() {
        score = 0;
        steps = 0;
        document.querySelector('.js-steps').innerHTML = (`<p class="font-interstate">Steps: ${steps}</p>`)
        start()
    }

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

    // KÀRTYA FORDÌTÒ ESEMÈNY FIGYELŐK
        function eventStart(x) {
            x.addEventListener('click', turnCall)

            function turnCall() {
                cardTurn(x)
            }
        }
    // KÀRTYÀK FELFEDÈSE
        function cardTurn(x) {
            x.classList.add('active')
            var cardName = (x.classList[0])
            var inner = '<img src="./src/assets/img/card'+cardName+'.svg" alt="cardback">'
            x.innerHTML = (inner)
            cardLoad(x.classList[0])
        }
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

        eventStart(A1), eventStart(A2)
        eventStart(B1), eventStart(B2)
        eventStart(C1), eventStart(C2)
        eventStart(D1), eventStart(D2)
        eventStart(E1), eventStart(E2)
        eventStart(F1), eventStart(F2)

    // ELLENÖRZÖ FÜGGVÈNY - MEGVANNAK-E A PÀROK
        function controller() {
            if ( ( pushBox1.length == 1 ) && ( pushBox2.length == 1 ) ) {
                let eredmeny = pushBox1 + pushBox2

                console.log(eredmeny)

                if ( eredmeny[0] == eredmeny[2] ) {
                    hit = true;
                    document.querySelector('.active').classList.remove('active')
                    document.querySelector('.active').classList.remove('active')
                    stepsNum()            
                }

                else {
                    hit = false
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
                    stepsNum()
                }
                pushBox1.length = 0;
                pushBox2.length = 0;
            }
        }
    }

start()


/*
A1.addEventListener('click', mukodes)

function mukodes() {
    console.log("müködik")
}

function nemmukodes() {
    A1.removeEventListener('dblclick', mukodes)
}
*/