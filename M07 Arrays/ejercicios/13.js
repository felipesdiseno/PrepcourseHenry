function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var resultado = resultadosTest.reduce(function(acum, numero){
    return (acum = acum + numero);
  });
return resultado / resultadosTest.length;
}

module.exports = promedioResultadosTest;
