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


//* ESERCIZIO 1: GIOCO DEI DADI
/* Analisi

1 - Prendo gli elementi dalla pagina
2 - Generare un numero random per il pc
3 - Generare un numero random per il giocatore
4 - Confrontare i numeri e stabilire chi è il vincitore
5 - Stampiamo in pagina i numeri e il risultato 
*/

// 1 - Prendo gli elementi dalla pagina
// const winnerUser = document.getElementById('winner');
// const pcNumber = document.getElementById('pc-number');
// const userNumber = document.getElementById('user-number');


// // 2e3 - Generare i due numeri random
// const randomNumberPc = Math.floor(Math.random() * 6) + 1;
// console.log(`Il dado lanciato dal Pc ha fatto ${randomNumberPc}`);

// const randomNumberUser = Math.floor(Math.random() * 6) + 1;
// console.log(`Il dado lanciato dall'utente ha fatto ${randomNumberUser}`);

// // 4 - Stabilire chi è il vincitore
// if (randomNumberPc === randomNumberUser) {
//     console.log(`Pareggio!: rilancia i dadi`);
//     winnerUser.innerText = (`Pareggio!: Rilancia i dadi`);
// } else if (randomNumberPc > randomNumberUser) {
//     console.log(`Il vincitore è il pc`);
//     winnerUser.innerText = (`Il vincitore è il Pc con il numero ${randomNumberPc}`);
// } else {
//     console.log(`Il vincitore è l'utente`);
//     winnerUser.innerText = (`Il vincitore è l'utente con il numero ${randomNumberUser}`);
// }

// // 5 - Stampo in pagina i numeri e il risultato
// pcNumber.innerText = (`Il dado del Pc ha fatto ${randomNumberPc}`);
// userNumber.innerText = (`Il dado dell'utente ha fatto ${randomNumberUser}`);


//* -----------------------------------------------------------------------------------------
//* -----------------------------------------------------------------------------------------

//* ESERCIZIO 2: FINTA LOGIN
/* Analisi

1 - Creo un lista di email autorizzate
2 - Prendo gli elementi dalla pagina
3 - Aggancio l'event listener al button che inserisce l'email
4 - Inserisco l'email e la salvo in una variabile
5 - Controllo se l'email inserita si trova nella lista
6 - Stampo in pagina un messaggio con l'esito del controllo
*/

// 1 - Creo una lista di email autrizzate
const emailValid = ['ale@gmail.com', 'ale@hotmail.com', 'ale@libero.com'];
// const firstElement = emailValid[0];
// console.log(firstElement);

// 2 - Prendo gli elementi dalla pagina
const emailElement = document.getElementById('email');
const buttonElement = document.getElementById('check-email');
const resultMessage = document.getElementById('result');
// console.log(buttonElement);
// console.log(emailElement);

// 3 - Aggancio l'event listener al button che inserisce l'email
buttonElement.addEventListener('click', function() {

    // 4 - l'utente inserisce l'email e la salva in una variabile
     let emailAuthorized = emailElement.value;

    /* 5e6 - Controllo se l'email inserita si trova nella lista
             e stampo il messaggio in pagina */
    for(let i = 0; i < emailValid.length; i++) {
        const currentEmail = emailValid[i];
       
       if (currentEmail !== emailAuthorized) {
        // console.log(`non valida`);
        resultMessage.innerText = (`Accesso non autorizzato`);

       } else {
        // console.log(`accesso autorizzato`);
        resultMessage.innerText = (`Puoi inserire la password`);
       } 
        
    }

})



