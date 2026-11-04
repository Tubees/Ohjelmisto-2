const maara = prompt("Osallistujen määrä?");
let osallistujat = [];

for (let i = 0; i < maara; i++) {
  osallistujat.push(prompt(i + 1 + " Nimi?"));
}
osallistujat.sort();

for (let i = 0; i < osallistujat.length; i++) {
  let li = document.createElement("li");
  li.textContent = osallistujat[i];
  document.querySelector("#target").appendChild(li);
}

console.log(osallistujat);
