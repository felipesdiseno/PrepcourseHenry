/* TABLA DE VERDAD:

VALOR 1  OPERADOR  VALOR 2   RESULTADO 
TRUE        &&      TRUE        TRUE
TRUE        &&      FALSE       FALSE
FALSE       &&      TRUE        FALSE
FALSE       &&      FALSE       FALSE

*/

//una persona que quiere entrar a una discoteca debe 18 años  tener y ademas el tikect de entrada.
// si la persona quiere entrar, pero no tiene ticket. y es amigo del dueño. Puede entrar

function entrada(nombre, edad, ticket, friend){
    if((edad >= 18) && (ticket == true)){
        return  nombre + ", Puedes pasar";
    } else if ( edad >= 18 && ticket == false  && friend == true ){
return  nombre + " puede entrar por rosca";
    } else return "no puede ingresar";
}

var resultado = entrada("camilo", 19, true, false );

console.log(resultado)

// si se el limite del bucle debo utilizar el ciclo for, pero si no se ese limite debo utilizar el limite while

var edad = 18

for (var i = 0; i <= 200; i++){
    if (edad == 18 && i == 18){
        console.log("pasaste por el numero 18");
    }
    console.log(i)
}

// ciclo while

var i = 0;
var edad = 18
while(i < 200){
    if(i == 18 && edad == 18 ){
    console.log("pasaste por el numero 18")
    }
console.log(i)
i++;
}

var i = 0 // 1. se crea el interador

while (i < 200) /*creo la condición  de parada.*/ { 
i++ /*creo la condicion para que el interador siga incrementado ++ */

}

//bucle do while, dentro del "do"  se hace el codigo una vez 
var i = 0
do{
console.log(i)
i++;
}while(i < 200)


