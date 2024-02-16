


// variables: 
// = es un signo de asignación 
// 
var string = "palabra";

var stringLargo = "texto muy largo"

var stringVacio = ""

var numero = 12333

var numeroDecimal = 8.12

var numeroNegativo = -7.5

var bool = true; 

var bool2 = false

var nulo = null // es un tipo de dato que existe, pero esta vacio

var indefinido = undefined; // es un tipo de dato que no existe 


typeof // muestra el tipo de dato de una variable y se emplea dentro de un console.log

console.log(typeof bool2)


// sintaxis: 

//funciones son bloques de codigo reutilizable que realiza una tarea espefica 

function suma(){
    //dentro de estas llaves va lo que la funcion va a realizar 
    var numero1 = 5 
    var numero2 = 6
    var numero3 = 7 
    
    console.log(numero1 * numero2 + numero3 * numero2)
}

// esta funcion se debe invocar 

suma()

//condicionales
//if y else 
// sirven para dar flujo 

var edad = 20

function validacion(age){
    if (age > 18){
        console.log("es mayor de edad")
    } else "es menor de edad"
}

validacion(edad)

//objeto math invoca operaicones matematicas 

console.log(Math.pow(3, 2))