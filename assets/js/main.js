/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */



const startGame = document.querySelector('.start-game > button');
const startMarkup = document.querySelector('section.start-game');
const gridFieldSection = document.querySelector('section.grid-field');
let gameMission = 'Clicca su una casella'


//al click del pulsante
startGame.addEventListener('click', function(){

    //rimuovo markup iniziale
    removeMarkup(startMarkup);

    //genero un nuovo markup con il titolo del gioco
    gridFieldSection.innerHTML = `<h1 class="w-100 mb-4" >${gameMission}</h1>`; // 'Clicca su una casella'

    //uso una funzione per creare delle card cliccabili
    genCardEvent(gridFieldSection, 100);


});

//funzione per rimuovere il markup interno ad una selezione
function removeMarkup (markup) {

    markup.innerHTML = '';
};

// funzione per generare le card con un eventlistener con input: dove(domElement) e quante card da creare (targhet)
function genCardEvent (domElement, targhet) {

    for (let i = 0; i < targhet; i++) {

        //genero la card
        const genElement = document.createElement('div');
        genElement.className = 'eb_card';
        genElement.append(i + 1);
        domElement.append(genElement);

        //genero eventlistener per ogni card creata
        genElement.addEventListener('click', function(){

            this.classList.toggle('eb_active');//attiva o disattiva classe

            //stampo in console la card cliccata
            console.log('Hai cliccato nella casella', i + 1);

            //*****************temporaneo, solo per stamparlo in pagina**************************
            document.querySelector('section.grid-field > h1').innerHTML = `Hai cliccato nella casella: ${i + 1}`; // Hai cliccato nella casella: ${i + 1}

        }); 
        
    };

};