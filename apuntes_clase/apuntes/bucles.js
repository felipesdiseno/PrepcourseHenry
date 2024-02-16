/* TABLA DE VERDAD:

VALOR 1  OPERADOR  VALOR 2   RESULTADO 
TRUE        &&      TRUE        TRUE
TRUE        &&      FALSE       FALSE
FALSE       &&      TRUE        FALSE
FALSE       &&      FALSE       FALSE

*/

/* bucle: 
-secuencia de instrucciones a la se asigna una condicion

- se ejecuta hasta que la condicion asignada deje de cumplirse

EJEMPLO: LAVAR LOS PLATOS
1 coger el plato sucio
2 pasar jabon
3 mojarlo
4 secarlo
condicion: limpíar todos los platos.



bucle for = for(){}
dentro del parentesis van tres parametros 
1. var i = 0 la primera iteracion siempre sera 0 y se escribe ; para saber que sigue el segundo parametro
2. se designa sobre los elementos que se quiere realizar la iteracion. si se quiere iterar sobre todos los elementos se utlizara el .length
pero si se quiere iterar sobre los primeros dos elementos se colocará i < 3.
3. se coloca que suceda despues de cada iteracion con cada elemento, para ello se coloca i++

*/

var arr = [1, 2, 3, 4, 5];
for(var i; i < arr.length; i++){
    console.log(arr[i]);
}

/* EJEMPLO: si queremos encontrar la letra "p" dentro de un string. debemos realizar el siguiente procedimiento: 
*/

function encontrarLetraP(string){
    var letras =string.split('');
    for(let i = 0; i < letras.length; i++);
    if(letras[i] === "p"){
    console.log("si contiene letra p")
    }
}

encontrarLetraP("javascript")
encontrarLetraP("henry")


// while mientras la condicion que está dentro de las {} sea especifica, el bucle seguira haciendo su ciclo

var arr1 = [];

while (arr1.length < 5) {
    arr1.push("BOOM");
}
console.log(arr1)
