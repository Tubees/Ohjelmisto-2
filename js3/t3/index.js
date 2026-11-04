let koirat = [];

for (let i = 1; i < 7; i++) {
  koirat.push(prompt(i + ".Koiran nimi?"));
}
koirat.sort().reverse();

console.log(koirat);

for (let i = 0; i < koirat.length; i++) {
  let li = document.createElement("li");
  li.textContent = koirat[i];
  document.querySelector("#target").appendChild(li);
}
