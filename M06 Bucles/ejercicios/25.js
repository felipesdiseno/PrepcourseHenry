function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var j = string.length - 1;
  var palabra = string.replace(/ /g,"").toLowerCase();

  
  for ( var i = 0; i < palabra.length; i++ ){
if (palabra[i] !== palabra[j]) return false;
j--
  }
  return true;
}

module.exports = esPalindromo;
