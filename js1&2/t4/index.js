const nimi = prompt("Nimi?");
const nro = Math.floor(Math.random() * 4);
let luokka = "";

if (nro === 0) {
  luokka = "Gryffindor";
} else if (nro === 1) {
  luokka = "Slytherin";
} else if (nro === 2) {
  luokka = "Hufflepuff";
} else if (nro === 3) {
  luokka = "Ravenclaw";
}

document.querySelector("#target").innerHTML =
  nimi + ", you are " + luokka + ".";
