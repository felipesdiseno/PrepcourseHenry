function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var palabraFinal = ""

for (var i = texto.length - 1 ; i >= 0 ; i--){
palabraFinal = palabraFinal + texto[i] 

}
return palabraFinal;
}

module.exports = invertirTexto;


invertirTexto("hola mundo")