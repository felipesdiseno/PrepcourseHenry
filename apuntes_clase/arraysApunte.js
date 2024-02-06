//como se escribe un arreglo: se escribe dentro de []

//puede contener informacion dentro de []
var arreglo = [1, 2, 3, 4];

var arreglo2 = [] // puede estar vacio

var arreglo3 = [1, "1222", true, , , , ,  "string"]; // puede contener 
// el index o indice es la posicion en la que se encuentra cada elemento, siempre la posicion inicial es 0
// para acceder a los valores: 

// cuando se utiliza .length. va a mostrar la cantidad de argumentos 

// para cambiar valores 
var array = [1, 2, 3, 4]
array[1] = "cambiamos este valor numero por este string";

// metodos .push: agrega solo al final del array

var array1 = [1, 2, 3, 4, 5, 6, 7]
array1.push("hola")

//.pop() elimina y devuelve el ultimo elemento de un arreglo.


var array2 = [1, 2, 3, 4, 5, 6, 7]
array2.pop();
console.log(array2)

// .shift elimina y devuelve el primer elemento del array
// .unshift agrega uno o mas elemento al inicio del array 

var arreglo1 = [1, 2, 3, 4, 5, 6, 7];

function mostrarElementos(item) {
    console.log(item + 1);
    return item + 1;
}

var resultado = arreglo1.map(mostrarElementos);
console.log(resultado);
