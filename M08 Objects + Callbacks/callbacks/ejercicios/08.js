const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  var flag = "No se encontró el elemento";;
for (var i = 0; i < array.length; i++){
  if (callback(array[i])){
    flag = array[i];
  }
  }
  return flag;
};


module.exports = buscarElemento;
