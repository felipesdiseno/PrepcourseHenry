// un objeto se hace con {}
//(un array se hace con [])
//para rellenar este objeto se debe tener en cuenta dos cosas, una propiedad y un valor.
//tener en cuenta en la sintaxis que cuando se termine de agregar un valor debe ir coma ","

/*var objeto1 = {}; // objeto vacio.

var objeto = {
    propiedad: valor,
    nombre: "camilo", // la propiedad puede tener un valor como string
    5: 123456, // la propiedad se puede escribir con numeros (5)
    true: 1234, // la propiedad se puede escribir con booleanos
    bool: true, // el valor puede ser un booleano 
    propiedad1: function(){

    }, //el valor tamnbien puede ser un objeto.

    // la propiedad tambien puede tener propiedades y valores a su interior:
propiedad2: {
    propiedad1: valor1,
    propiedad2: valor2,
    propiedad3: [{
        propiedad: [{},{},{}]
    }] 
},

}*/

// las propiedades o claves dentro de los objetos deben ser unicas. 

var persona = {
    nombre: "camilo",
    apellido: "arenas",
    edad: 29,
    direccion: "av siempreviva",
    mascotas: [{
        nombre: "ragnar",
        raza: "borde collie"
    }, {
        nombre: "polo",
        raza: "labrador"
    }
],
direccion: "calle falsa 123",
};
console.log(persona["mascotas"][0]["raza"])

//braket notation se utiliza cuando se conoce la propiedad del objeto:
console.log(persona.mascotas[0].nombre) 

//dot notation se utiliza cuando no se conoce la propiedad del objeto:
console.log(persona.nombre + " " + persona.edad)


/* los metodos son funciones asociadas a un objeto. Estos metodos permiten que los 
objetos realicen acciones especificas*/
// la palabra this, esta reservada para poder acceder hacer referencia o llamar a la propiedad de un  objeto.

var hola = {
    saludar: function (saludo) {
        return saludo + this.nombre;
    }
}
console.log(hola.saludar("holi "))

console.log(persona.hasOwnProperty("direccion")) //permite saber si hay una propiedad dentro del objeto

console.log(Object.keys(persona)) //permite ver todas las propiedades de un objeto


// ciclo for in para objetos 
for (var key in persona){
    console.log(key)
    console.log(persona)
console.log(persona[key])
}

//para poder agregar una propiedad:
persona.universidad = true;

//para modificar: 
persona.nombre ="alfredo";

// si la propiedad no existe, la crea, en caso de que este creada. Esta se modificára

// para poder eliminar una propiedad de un objeto:

delete persona.direccion;

console.log(persona.direccion) //undefined



