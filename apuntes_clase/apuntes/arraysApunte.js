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
console.log(array1.length)
console.log(array1)

//.pop() elimina y devuelve el ultimo elemento de un arreglo.


var array2 = [1, 2, 3, 4, 5, 6, 7]
array2.pop();
console.log(array2)

// .shift elimina y devuelve el primer elemento del array
// .unshift agrega uno o mas elemento al inicio del array 

var arreglo1 = [1, 2, 3, 4, 5, 6, 7];

arreglo1.shift()
console.log("se elimino con shift el primer elemnto: " + arreglo1)
arreglo1.unshift("1 agregado con unshift")
console.log(arreglo1)

//llenado de arrays
var listaDecompras = [];
listaDecompras[3] = "tomates"
listaDecompras[1] = "lechuga"
console.log(listaDecompras)



//metodo length permite saber cuantos elementos tiene un arreglo. cual es su extension


console.log(listaDecompras.length);

var carros = ["audi", "mercedes", "ferrari", "subaru"];

console.log(carros[1]);

//metodo includes permite saber si un elemento en especifico se encuentra dentro de un array:

var pintores1 = ["picasso", "botero", "dali"];
var incluyeBotero = pintores1.includes("botero");
console.log(incluyeBotero);

var pintores2 = ["picasso", "botero", "dali"];
var incluyeBotero = pintores1.includes("rayo");
console.log(incluyeBotero);


//metodo every, permite saber si todos los elementos cumplen una misma condición 

var numeros1 = [1, 6, 8, 9];

var cumple1 = numeros1.every((num) =>{
    return num > 5;
});

console.log(cumple1)
//retorna false, porque hay un elemento que no cumple con la condicion. (1)

var numeros2 = [6, 6, 8, 9];

var cumple2 = numeros2.every((num) =>{
    return num > 5;
});

console.log(cumple2)
// acá todos cumplen la condición

//metodo split (separar)

var palabra ="henri" //queremos arreglar este string que tiene un error de ortografia
var palabraSeparada = palabra.split('') //dentro de los () se coloca 
console.log(palabraSeparada)

// ahora hay que eliminar la ultima letra  y colocar la "y" para poder arreglar la palabra "henry"

palabraSeparada.pop()

console.log(palabraSeparada)//elimino la letra i

palabraSeparada.push("y");

console.log(palabraSeparada) // se agrego la letra y

// para poder convertirla de nuevo en un string es necesario guardar el array en un variable

var palabraArreglada = palabraSeparada.join('')
// se debe colocar comillas simples  para que agrupe el string dentro de estas

console.log(palabraSeparada)
console.log(palabraArreglada)

//metodo forEach (por cada uno) permite recorrer un arreglo y ralizar una acción por cada elemento

var numeros3 = [1, 2, 3, 4];
numeros3.forEach((num) => console.log(num));

/* metodo map. tambien permite recorrer el arreglo y realizar una accion por cada elemento.
pero la diferencia es que este metodo devuelve un nuevo arreglo con los elementos modificados */

var masUno = numeros3.map(num => {
    return num + 1})
    console.log(masUno)