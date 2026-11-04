let lista = [];

while (true) {
  const numero = prompt("Anna numero:");

  if (lista.includes(numero)) {
    break;
  }

  lista.push(numero);
}

lista.sort((a, b) => a - b);

for (i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
