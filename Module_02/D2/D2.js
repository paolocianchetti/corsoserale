// Tutti i dati sono rappresentati all'interno di un computer come lunghe sequenze di uno
// e zero, ma per la maggior parte delle attività quotidiane vogliamo pensare ai dati
// in un modo più naturale per noi: numeri, testo, date e così via.
// Queste astrazioni sono chiamate "tipi di dati".
// In JavaScript, i valori sono "primitivi". 
// I tipi primitivi (come stringhe e numeri) sono "immutabili".
// Il numero 5 sarà sempre il numero 5; la stringa "alfa" sarà sempre la stringa "alfa".
// Questo sembra ovvio per i numeri, ma spesso fa inciampare le persone con le stringhe:
// quando le persone concatenano le stringhe insieme ("alfa" + "omega"), a volte pensano
// che sia la stessa stringa, solo modificata. Non è così: si tratta di una nuova stringa,
// così come 6 è un numero diverso da 5. Ci sono sette tipi primitivi:

// - Number
//   JavaScript dispone di un solo tipo di dati numerici.
//   La maggior parte dei linguaggi ha più tipi interi e due o più tipi in virgola mobile.
//   Da un lato, questa scelta semplifica JavaScript, ma riduce l'idoneità di JavaScript
//   per alcune applicazioni che richiedono le prestazioni dell'aritmetica intera o la
//   precisione dei numeri a precisione fissa.
//   JavaScript approssima i numeri reali attraverso un formato chiamato IEEE-764
//   "double-precision floating-point". Le conseguenze delle approssimazioni richieste
//   da questo formato spesso colgono di sorpresa. Ad esempio, se si chiede a JavaScript
//   di calcolare 0,1 + 0,2, il risultato sarà 0,30000000000000004.
//   Questo non significa che JavaScript non sia bravo in matematica: è semplicemente
//   una conseguenza inevitabile dell'approssimazione di valori infiniti in una memoria finita.
//
//
// - String 
//   Una "stringa" è semplicemente un dato testuale (la parola "stringa"
//   deriva da "stringa di caratteri", una parola originariamente usata alla fine
//   del 1800 dai tipografi e poi dai matematici per rappresentare una sequenza di
//   simboli in un ordine definito). Le stringhe in JavaScript rappresentano il testo "Unicode".
//   In JavaScript, i letterali di stringa sono rappresentati con apici singoli, doppi apici
//   o backticks, chiamati anche "accento grave".
// 
// - Boolean
//   I booleani sono tipi di valore che hanno solo due valori possibili: true e false.
//   Alcuni linguaggi usano i numeri al posto dei booleani: 0 è falso e ogni altro numero
//   è vero. JavaScript ha un meccanismo simile, che consente a qualsiasi valore
//   (non solo il numero) di essere considerato "vero" o "falso".
//   Si deve prestare attenzione a non usare le virgolette quando si usa un booleano.
//   In particolare, bisogna evidenziare il fatto che la stringa "false" è in realtà vera!
//
// - Null
//   Sta a significare che una variabile non contiene niente. E' come se una scatola
//   fosse stata svuotata completamente del suo contenuto.
//
// - Undefined
//   Sta a significare che è stata dichiarata una variabile ma senza fornire ad essa
//   alcun valore o altro contenuto.
//
// - Symbol
// - BigInt

// Si noti che l'immutabilità non significa che il "contenuto di una variabile"
// non possa cambiare:

//	let str = “hello”;
//	str = “world”;

// Prima "str" viene inizializzato con il valore (immutabile) "hello" e poi gli viene
// assegnato un nuovo valore (immutabile), "world". L'importante è che "hello" e "world"
// siano stringhe diverse; solo il valore di "str" è cambiato.

// Oltre a questi sei tipi primitivi, esistono i "tipi di dato strutturati" (Structural Types).
// Essi sono gli Oggetti, le Funzioni e gli Array.
// A differenza delle primitive, gli oggetti possono assumere forme e valori diversi.
// Gli oggetti sono raccolte di coppie chiave-valore. Grazie alla loro flessibilità,
// gli oggetti possono essere utilizzati per costruire tipi di dati personalizzati.
// A loro volta i tipi primitivi number, string e boolean hanno tipi di oggetto corrispondenti,
// "Number", "String" e "Boolean". Questi oggetti corrispondenti non memorizzano
// effettivamente un valore (questo è ciò che fa la primitiva), ma forniscono funzionalità
// legate alla primitiva corrispondente.
// Le Funzioni rappresentano un blocco di codice che può essere richiamato ed eseguito più volte.
// Gli Array sono delle collezioni di dati eterogenei.


const num1 = 12;
const num2 = 20;

const result = num1 + num2;
console.log(`num1 + num2: ${result}`);

const x = 12;
const name = "Paolo";

const sub = 4 - x;
console.log(`4 - x: ${sub}`);

const Persona = {
    nome: "Paolo",
    cognome: "Cianchetti",
    hobby: "Palestra",
}

console.log(Persona);

const name1 = "john";
const name2 = "John";

console.log(`name1 != name2: ${name1 !== name2}`);

console.log(`name1 è ora uguale a name2: ${name1.toLowerCase() === name2.toLowerCase()}`);

