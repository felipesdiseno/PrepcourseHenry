function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
var resultados = [];
for(var i = 0; i <= 10; i++){
  var resultado = i * 6;
if(resultado > 60){
  break;
}
resultados.push(resultado)
}
  return resultados;

}

module.exports = tablaDelSeis;


