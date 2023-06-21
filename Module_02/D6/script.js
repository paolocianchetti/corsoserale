function cambiaTitolo() {
    document.querySelector('h1').innerText = 'Elettronica Vintage in questo sito!';
}

function cambiaSfondo() {
    document.querySelector('body').style.backgroundColor = 'yellow';
}

function cambiaIndirizzo() {
    document.querySelector('#address p').innerText = 'Tanto è tutto Made in China!!';
}

function aggiungiClasse () {
    let links = document.querySelectorAll('a');
    for (let link of links) {
      link.classList.add('decorated');
    }
}

function cambiaVisibilitaImg () {
    let imgs = document.querySelectorAll('img');
    for (let img of imgs) {
      img.classList.toggle('hidden');
    }
}

function generaColoriCasuali () {
    const rosso = Math.floor(Math.random() * 255);
    const verde = Math.floor(Math.random() * 255);
    const blu = Math.floor(Math.random() * 255);
    return `rgb(${rosso}, ${verde}, ${blu})`;
}

function cambiaColorePrezzi () {
    let prezzi = document.querySelectorAll('.price');
    let colore;
    for (let prezzo of prezzi) {
      colore = generaColoriCasuali();
      prezzo.style.color = colore;
    }
}