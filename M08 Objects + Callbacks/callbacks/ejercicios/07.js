function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var nuevoArray = arrayOfStrings.filter(function(string){
    if(string.startsWith("a"))
    return string
})
return nuevoArray;
}

module.exports = filter;

