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

1 - Prendo l'elemento dalla pagina
2 - Genrerare un numero random per il pc
3 - Generare un numero random per il giocatore
4 - Confrontare i numeri e stabilire chi è il vincitore
5 - Stampiamo in pagina i numeri e il risultato 
*/

// 1 - Prendere l'elemento dalla pagina
const winnerUser = document.getElementById('winner');
// console.log(winnerUser);

// 2 - Generare un numero random per il pc
const randomNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(`Il dado lanciato dal pc ha fatto ${randomNumberPc}`);

const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(`Il dado lanciato dall'utente ha fatto ${randomNumberUser}`);


