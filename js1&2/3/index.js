const nro1 = prompt("Eka numero");
const nro2 = prompt("Toka numero");
const nro3 = prompt("Kolmas numero");

const sum = Number(nro1) + Number(nro2) + Number(nro3);
const product = Number(nro1) * Number(nro2) * Number(nro3);
const avg = sum / 3;

document.querySelector("#target").innerHTML =
  "Sum: " + sum + "<br> product: " + product + "<br> average: " + avg;
