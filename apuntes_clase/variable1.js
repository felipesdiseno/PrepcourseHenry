// clase de variables 18/01

/* las variables es un contendor el cual puede almacenar valores, este valor puede cambiar mas adelante*
pueden almacenar numero, texto */

//caracteres que no sean numero son strings !? @
// numeros 1, 2, 3 y decimales
// boolean es para poder decir si algo es verdadero o falso

//datos null (nulo): puede ser el equivalente a false o 0 

//undefined es algo que no existe
// = es un simbolo de asignación.

var nombre1 = "Juan";
var nombre2 = "pedro";
var numero1 = 5;
var numero2 = 5.5;
var numero3 = -5;

var boolean = true;
var boolean = false;

var nulo = null; 

var indefinido = undefined;

console.log(nombre1)

//funciones 

function hola(){
    var nombre5 = "camilo"
    var resultado = saludar(nombre5)
    console.log(resultado)
}

// condicionales if y else son solo controladores de flujo.
if(10 > 5){
    console.log("10 es mayor que 5")
} else {
    console.log("10 no es mayor que 5");
}