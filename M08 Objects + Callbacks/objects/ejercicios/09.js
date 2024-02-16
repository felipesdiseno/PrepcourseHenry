function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var sujeto = {
    nombre: "julian",
    email: "juli@gmail.com",
    password: "california"

  }
  var valores = Object.values(sujeto);
  return valores;
}

module.exports = nuevoUsuario;
