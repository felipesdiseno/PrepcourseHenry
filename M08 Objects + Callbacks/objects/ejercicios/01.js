const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
var arrayPropiedades = propiedad.split(".")
if (arrayPropiedades.length >= 2 ) {
  return objeto[arrayPropiedades[0]][arrayPropiedades[1]];
} else return objeto[propiedad];

  
};

module.exports = obtenerValorPropiedad;


