// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: "felipe",
    edad: "29 años",
    deporte: "ciclismo"
    console.log( "hola, mi nombre es " + this.nombre + "y me gusta " + this.deporte);
};

module.exports = objetoAnidado;
