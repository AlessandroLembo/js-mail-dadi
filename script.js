console.log(' JS OK ');

/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato.
*/

/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


//* ESERCIZIO 1
/* Analisi

1 - Prendo gli elementi dalla pagina
2 - Generare un numero random per il pc
3 - Generare un numero random per il giocatore
4 - Confrontare i numeri e stabilire chi è il vincitore
5 - Stampiamo in pagina i numeri e il risultato 
*/

// 1 - Prendo gli elementi dalla pagina
const winnerUser = document.getElementById('winner');
const pcNumber = document.getElementById('pc-number');
const userNumber = document.getElementById('user-number');


// 2e3 - Generare i due numeri random
const randomNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(`Il dado lanciato dal Pc ha fatto ${randomNumberPc}`);

const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(`Il dado lanciato dall'utente ha fatto ${randomNumberUser}`);

// 4 - Stabilire chi è il vincitore
if (randomNumberPc === randomNumberUser) {
    console.log(`Pareggio!: rilancia i dadi`);
    winnerUser.innerText = (`Pareggio!: Rilancia i dadi`);
} else if (randomNumberPc > randomNumberUser) {
    console.log(`Il vincitore è il pc`);
    winnerUser.innerText = (`Il vincitore è il Pc con il numero ${randomNumberPc}`);
} else {
    console.log(`Il vincitore è l'utente`);
    winnerUser.innerText = (`Il vincitore è l'utente con il numero ${randomNumberUser}`);
}

// 5 - Stampo in pagina i numeri e il risultato
pcNumber.innerText = (`Il dado del Pc ha fatto ${randomNumberPc}`);
userNumber.innerText = (`Il dado dell'utente ha fatto ${randomNumberUser}`);



