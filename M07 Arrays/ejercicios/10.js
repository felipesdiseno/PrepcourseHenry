function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0){
    return 0;
  }
  var mayor = 0;
  for (var i = 1; i < array.length; i++){
    if (array[i] > array[mayor]){
      mayor = i;
    }
  }
  return mayor;
}

module.exports = encontrarIndiceMayor;

