/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// oggetto delle localita' presenti
let locations = {
  '01': "SG",
  abudhabi: "AE,",
  america: "US",
  arabemirates: "AE,",
  arizona: "US, AZ",
  auckland: "NZ",
  austin: "US, TX",
  australia: "AU, NSW",
  ae: "AE,",
  au: "AU",
  az: "US, AZ",
  berlin: "DE, BE",
  be: "DE, BE",
  california: "US, CA",
  ca: "US, CA",
  canada: "CA, ON",
  carlsbad: "US, CA",
  connecticut: "CT",
  ct: "US, CT",
  dc: "US, DC",
  de: "DE",
  districtofcolumbia: "DC",
  everett: "US, WA",
  florida: "FL",
  fl: "US, FL",
  fortworth: "FL",
  germany: "DE",
  gb: "GB",
  greatbritain: "GB",
  il: "IL",
  jerseycity: "US, NJ",
  ia: "US, IA",
  iowa: "IA",
  israel: "IL",
  kansas: "KS",
  ks: "US, KS",
  louis: "US, MO",
  london: "LND",
  lnd: "London",
  maryland: "MD",
  massachusetts: "MA",
  ma: "US, MA",
  md: "US, MD",
  missouri: "MO,",
  mo: "US, MO",
  newjersey: "NJ",
  newsouthwales: "NSW",
  newyork: "NY",
  newzealand: "NZ",
  ny: "NY",
  nj: "US, NJ",
  nz: "NZ",
  ontario: "ON,",
  on: "CA, ON",
  orlando: "US, FL",
  pa: "US, PA",
  pennsylvania: "PA",
  pensacola: "FL",
  phoenix: "AZ",
  saintbonaventure: "US, NY",
  saintlouis: "US, MO",
  sanfrancisco: "US, CA",
  sanramon: "US, CA",
  sg: "SG,",
  singapore: "SG",
  southendonsea: "GB, SOS",
  southend: "GB, SOS",
  sos: "Southend-on-Sea",
  st: "US, MO",
  stamford: "US, CT",
  sydney: "AU, NSW",
  telaviv: "Israel",
  texas: "TX",
  toronto: "CA, ON",
  tx: "US, TX",
  unitedstatesofamerica: "US",
  unitedstates: "US",
  usa: "US",
  usanortheast: "US, PA",
  us: "US",
  waltham: "US, MA",
  washington: "US, WA",
  wa: "US, WA",
  wever: "IA"
}

// oggetto in cui vengono memorizzati i risultati della ricerca
let obj = {
    result: [],
    count: 0
}

const jobString = document.getElementById('jobstring');   // Posizione lavorativa cercata
const tipJobMsg = document.getElementById('tipforjob');   // Messaggio di errore per la posizione lavorativa cercata
const locationString = document.getElementById('joblocation');  // Localita' cercata
const tipLocMsg = document.getElementById('tipforloc');   // Messaggio di errore per la localita' cercata
const btnSearch = document.getElementById('searchBtn');   // Bottone di ricerca
const counter = document.getElementById('counter');       // Contatore num. risultati ottenuti
const elList  = document.getElementById('list');          // Lista dei risultati

// Questa funzione inizializza l'oggetto in cui vengono memorizzati
// i risultati della ricerca

function initResults() {
  obj.result = [];
  obj.count = 0;
}

// Questa funzione esegue la ricerca delle posizioni lavorative
// parametri in ingresso (posizione lavorativa cercata e localita')

function searchJobs(pos, loc) {
  initResults();

  for(let job of jobs) {
    if(job.title.toLowerCase().includes(pos) && job.location.toLowerCase().includes(locations[loc].toLowerCase())) {
      obj.result.push(job);
      obj.count += 1;
    }
  }
  
  if(obj.count !== 0) {
    return obj;
  } else {
    return false;
  }
}

// Questa funzione utilizza searchJobs per effettuare la ricerca, passando
// pero' alla funzione ogni singola parola trovata nella stringa di ricerca

function searchForItems(pos, loc) {
  initResults();

  const breakpoint = /[,-/\s]/i;
  let objResult;
  let items = pos.split(breakpoint).filter(element => element);

  for(let item of items) {
    if(item === "of") continue;
    objResult = searchJobs(item, loc);
    if(objResult !== false) break;
  }

  if(objResult !== false) {
    return objResult;
  } else {
    alert("ITEMS NOT FOUND!!");
    window.location.reload();
  }
}

// Queste funzioni validano le stringhe immesse dall'utente nei campi di ricerca
// checkJobString verifica che la stringa sia di almeno tre caratteri, ma non di meno!
// checkLocString verifica che la stringa sia di almeno due caratteri.
// Se le stringhe di input non rispettano queste condizioni, non si procede nella ricerca e
// si chiede all'utente di inserire un lavoro valido o una localita' inclusa nel database.

function checkJobString(minLength) {
  if (jobString.value.length < minLength) {
    tipJobMsg.textContent = 'Job string must be ' + minLength + ' characters or more!';
  } else {
    tipJobMsg.textContent = '';
  }
}

function checkLocString(minLength) {
  if (locationString.value.length < minLength) {
    tipLocMsg.textContent = 'Loc string must be ' + minLength + ' characters or more!';
  } else {
    tipLocMsg.textContent = '';
  }
}

// Questa funzione prende le stringhe inserite dall'utente nei campi di ricerca
// e trasforma opportunamente prima di procedere nella ricerca

function getInputs(pos, loc) {
  if(pos.length < 3 || loc.length < 2) {
    alert("Not valid inputs!! Try to insert almost 3 characters for the job and almost 2 characters for the location...");
    window.location.reload();
  } else {
    let position = pos.toLowerCase();
    let location = loc.toLowerCase().split(' ').join('');
    if(location in locations) {
      return [position, location];
    } else {
      alert("The inserted location isn't in our Database!!");
      window.location.reload();
    }
  }
}

// Questa funzione aggiunge elementi alla lista in base ai risultati ottenuti

function addItems(items) {
  for(let i = 0; i < items.count; i++) {
    newEl = document.createElement('li');
    newText = document.createTextNode(items.result[i].title + ' ' + items.result[i].location);    // New text node
    newEl.appendChild(newText);
    elList.appendChild(newEl);
  }
}

// Questa funzione aggiorna il contatore del numero dei risultati ottenuti

function updateCount() {
  listItems = elList.getElementsByTagName('li').length;
  counter.textContent = listItems;
}

// Event Listeners

jobString.addEventListener('blur', function() {
  checkJobString(3);
}, false);

locationString.addEventListener('blur', function() {
  checkLocString(2);
}, false);

btnSearch.addEventListener('click', function() {
  if(obj.count !== 0) window.location.reload();
  let validInputs = [];
  validInputs = getInputs(jobString.value, locationString.value);
  let objResults = searchForItems(validInputs[0], validInputs[1]);
  if(objResults) {
    addItems(objResults);
  } else {
    alert("ITEMS NOT FOUND!!");
    window.location.reload();
  }
}, false);

elList.addEventListener('DOMNodeInserted', updateCount, false);