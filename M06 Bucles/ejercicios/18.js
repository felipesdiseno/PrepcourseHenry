function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acumulador = 1 
  for (var i = a; i <= b; i++){
    acumulador *= i;
  } 
  return acumulador;
}

module.exports = productoEntreNúmeros;

