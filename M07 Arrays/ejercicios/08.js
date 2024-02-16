function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var filtrarNumerosPares = array.filter(function(elemento){
    return typeof elemento === 'number' && elemento % 2 === 0;
  });
  return filtrarNumerosPares;
}

module.exports = filtrarNumerosPares;


