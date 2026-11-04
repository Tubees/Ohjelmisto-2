let lista = [];

let i = 1;
while (i != 0) {
  i = prompt("Anna numero:");
  lista.push(i);
}

lista.sort(function (a, b) {
  return b - a;
});

for (i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
