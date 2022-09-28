
//pronalazenje objekata (elementi, atributi, tekst...)
let div1 = document.getElementById("glavniDiv");
console.log(div1);

let prom = document.getElementsByClassName("pasus");
console.log(prom);

let prom2 = document.getElementsByTagName("h2");
console.log(prom2);

let prom3 = document.querySelector("p");
let promAll = document.querySelectorAll("p.noviPasus");
console.log(prom3);
console.log(promAll);

prom3.innerHTML = "Ovo je prvi <br> paragraf"; //ovde br cita kao tag, opasno!!! moze biti napada na sajt
// prom3.textContent = "Ovo je prvi <br> paragraf"; ovde je cist tekst

prom3.style.color = "rgb(255, 20, 20)";

let prom4 = prom3.nextElementSibling.nextElementSibling; // rodjak ali element, ne tekst
console.log(prom4);

let dugme = document.getElementById("menja boju");
console.log(dugme);
dugme.addEventListener("click", pritisnutoDugme);

//funkcija
function pritisnutoDugme () {
    console.log("Dugme je pritisnuto");
    window.alert("dugme je kliknuto");
    //menjamo background-color
    div1.style.backgroundColor = "rgb(150, 0, 50)";
    console.log(div1.classList);
    div1.classList.add("zeleno");
}

let forma = document.forms["porudzbina"];
console.log(forma);
let imePrezime = forma["imePrezime"];
console.log(imePrezime);
let adresa = forma["adresa"];
console.log(adresa);

let roditelj = document.querySelector("body");
let prvoDete = roditelj.firstElementChild;
console.log(prvoDete);

//1. zadatak
//Uneti ime i prezime u promt box
//Izmeniti jedan naslov (h1, h2...) tako da se ispisuje ime korisnika

let naslovi = document.querySelectorAll("h2");
console.log(naslovi);
let korisnik = prompt("Unesite ime i prezime:", "NN lice");
naslovi[0].textContent = "Lorem, ipsum " + korisnik;

//2. zadatak
// Uneti ime i prezime u input polje
//Izmeniti jedan naslov (h1, h2...) tako da se ispisuje ime korisnika

let posalji = document.getElementById("imePrezime");
console.log(posalji);
// posalji.addEventListener("focusout", upisiUNaslov);
posalji.addEventListener("input", upisiUNaslov);

function upisiUNaslov () {
    let ispis = posalji.value;
    console.log(ispis);
    naslovi[1].textContent = "Lorem, ipsum " + ispis;
}









