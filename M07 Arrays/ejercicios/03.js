function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

for (var i = 0; i < array.length; i++) {
  if (array[i] === elemento) {
    return i
  }
}
return -1;
}
encontrarElemento(4, [1, 2, 3, 4, 5, 6, 7])
module.exports = encontrarElemento;
