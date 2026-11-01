const vuosi = prompt("Vuosi?");

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
  document.querySelector("#target").innerHTML = vuosi + " on karkausvuosi.";
} else {
  document.querySelector("#target").innerHTML = vuosi + " ei ole karkausvuosi.";
}
