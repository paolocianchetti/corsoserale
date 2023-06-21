/* Crea la logica per un sito di e-commerce che deve supportare sconti extra per utenti
   speciali. A partire da una lista di prezzi, un utente e un costo di spedizione,
   l'algoritmo deve determinare il costo totale del carrello.
   Se l'utente ha la proprieta' isAmbassador con valore true, il carrello deve venire
   scontato del 30%, prima di calcolare la spedizione (anche gli utenti speciali pagano
   le spedizioni). Se l'utente ha la proprieta' isAmbassador con valore false, il carrello
   non deve venire scontato.
   In entrambi i casi, la spedizione e' gratuita per ogni carrello con costo superiore
   a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.
   Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un ciclo)
   la frase "NOMEUTENTE COGNOMEUTENTE e'/non e' un ambassador" basandoti sui dati
   contenuti nell'oggetto. Es: L'utente Marco Rossi e' un ambassador, quindi la frase
   dovrebbe essere: "Marco Rossi e' un ambassador".
   Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
 */

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = { 
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2, 50, 40];
let shippingCost = 50;

// cambia il valore qui per provare se il tuo algoritmo funziona!
let utenteCheEffettuaLAcquisto = marco;

let utenti = [];
utenti.push(marco);
utenti.push(paul);
utenti.push(amy);

let utentiSpeciali = [];

let totaleCarrello = 0;

// calcola l'imponibile
let imponibile = prices.reduce((a, b) => a + b);

function calcolaTotale() {
    if (utenteCheEffettuaLAcquisto.isAmbassador) imponibile = imponibile * 0.70;
    totaleCarrello = imponibile + shippingCost;
}

if (imponibile > 100) {
    shippingCost = 0;
    calcolaTotale();
} else {
    calcolaTotale();
}

for (let utente of utenti) {
    let acquirente = (utente.name + ' ' + utente.lastName + ' ');
    (utente.isAmbassador) ? acquirente += 'è un ambassador' : acquirente += 'non è un ambassador';
    console.log(acquirente);
}

for (let utente of utenti) {
    if (utente.isAmbassador) utentiSpeciali.push(utente);
}

for (let utente of utentiSpeciali) {
    console.log(`Utenti Ambassador: ${utente.name + ' ' + utente.lastName}`);
}

console.log(`Acquirente: ${utenteCheEffettuaLAcquisto.name}, ${utenteCheEffettuaLAcquisto.lastName}`);
if (utenteCheEffettuaLAcquisto.isAmbassador) console.log(`Utente Speciale!`);
console.log(`Prezzi degli articoli acquistati: ${prices.toString()}`);
console.log(`Totale Carrello: ${totaleCarrello}`);