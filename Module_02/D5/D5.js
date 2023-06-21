/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso
 allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (a, b) {
    return (a === b) ? (a + b) * 3 : (a + b);
}
console.log(crazySum(2, 5));
console.log(crazySum(10, 10));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente
 uguale a 400.
*/

function boundary (a) {
    return (( a <= 100 && a >= 20 ) || a === 400) ? true: false;
}
console.log(boundary(65), 65);
console.log(boundary(400), 400);
console.log(boundary(120), 120);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (str) {
    return (str.split('').reverse('').join(''));
}
let stringa = "abracadabra";
console.log(reverseString(stringa));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e
 la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (frase) {
    let parole = frase.split(' ');
    let paroleInizialeMaiuscola = [];
    
    for (let parola of parole) {
        let iniziale = parola[0].toUpperCase();
        let restoParola = parola.slice(1, parola.length);
        paroleInizialeMaiuscola.push(iniziale + restoParola);
    }
    return paroleInizialeMaiuscola.join(' ');
}

let comeVa = "ciao oggi non mi va nulla al contrario!";
console.log(comeVa);
console.log(upperFirst(comeVa));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero
 chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    let numeriCasuali = [];
    for (let i = 0; i < n; i++) {
        numeriCasuali.push(Math.floor(Math.random() * 11));
    }
    return numeriCasuali;
}
console.log(giveMeRandom(20).join(', '));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area
 del rettangolo associato.
*/

function area (l1, l2) {
    return (l1 * l2);
}
let lato1 = 10;
let lato2 = 40;
console.log(`L'area del rettangolo di lati ${lato1} e ${lato2} è uguale a ${area(lato1, lato2)}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero
 fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato 
 moltiplicato per 3.
*/

function crazyDiff (a) {
    let diffAssoluta = Math.abs(a - 19);
    return diffAssoluta > 19 ? diffAssoluta * 3 : diffAssoluta;
}
console.log(crazyDiff(55));
console.log(crazyDiff(-10));
console.log(crazyDiff(5));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita
 e ritornare il risultato, ma se la stringa fornita comincia proprio con "code"
 allora deve ritornarla senza modifiche.
*/

function codify (frase) {
    let parole = frase.split(' ');
    return (parole[0] === 'code') ? frase : 'code' + frase;
}
console.log(codify(' in JavaScript è bello!'));
console.log(codify('code in Java è meno bello!'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo
 come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal
 caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (numero) {
    return ((numero % 3 === 0) || (numero % 7 === 0)) ? true : false;
}
console.log(`21 è multiplo di 3 o di 7: ${check3and7(21)}`);
console.log(`79 è multiplo di 3 o di 7: ${check3and7(79)}`);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e
la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (str) {
    return str.slice(1, -1);
}
console.log(cutString('abracadabra'));
