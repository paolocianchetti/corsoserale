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

// database delle localita' corrette da passare come parametro alla funzione di ricerca
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
 
// stringhe di input
//let jobString = "Account - Washington";
//let locationString = "United States of AMERICA";
let jobString = "Guest Specialist";
let locationString = "California";


// validare le stringhe di input
// verifica che jobToSearch sia di almeno tre caratteri, ma non di meno!
// verifica che locationToSearch sia di almeno due caratteri e appartenga all'oggetto
// locations, attraverso l'operatore [in].
// Se le stringhe di input non rispettano queste condizioni, non procedere nella ricerca e
// chiedere all'utente di inserire un lavoro valido o una localita' inclusa nel database.

function validatePosition(pos) {
  if(pos.length < 3) {
    // alert()
    console.log("Not a valid input!! Try to insert almost 3 characters...");
    // ricarica la pagina
    return false;
  } else {
    let position = pos.toLowerCase();
    return position;
  }
}

function validateLocation(loc) {
  if(loc.length < 2) {
    //alert()
    console.log("Not a valid input!! Try to insert almost 2 characters...");
    // ricarica la pagina
    return false;
  } else {
    let location = loc.toLowerCase().split(' ').join('');
    if(location in locations) {
      return location;
    } else {
      // alert()
      console.log("The inserted location isn't in our Database!!");
      return false;
    }
  }
}

// validazione delle stringhe in input
let jobToSearch = validatePosition(jobString);
let locationToSearch = validateLocation(locationString);

console.log(` validated job: ${jobToSearch}`);
console.log(` validated location: ${locationToSearch}`);

// Questa funzione inizializza l'oggetto in cui vengono memorizzati
// i risultati della ricerca

function initResults() {
  obj.result = [];
  obj.count = 0;
}

// Questa funzione esegue la ricerca delle posizioni lavorative
// parametri in ingresso (posizione lavorativa cercata e localita')
// Non funziona bene se l'utente scrive parole composte separate
// da spazi, virgole, / o trattini nel campo di ricerca del lavoro

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
    console.log(`NOT FOUND!!`);
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
  console.log(items);

  for(let item of items) {
    objResult = searchJobs(item, loc);
    if(objResult !== false) break;
  }

  if(objResult.count !== 0) {
    return objResult;
  } else {
    console.log('NOT FOUND!!');
    return false;
  }
}

let risultato = searchJobs(jobToSearch, locationToSearch);
console.log("Risultato ottenuto con primo metodo: ");
console.log(risultato);

let risultato2 = searchForItems(jobToSearch, locationToSearch);
console.log("Risultato ottenuto con secondo metodo: ");
console.log(risultato2);