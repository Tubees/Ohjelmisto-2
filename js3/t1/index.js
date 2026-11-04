let lista = [];
for (let i = 0; i < 5; i++) {
  const arvo = prompt("Numero?");
  lista.push(arvo);
}

for (let i = 1; i <= lista.length; i++) {
  console.log(lista[lista.length - i]);
}
