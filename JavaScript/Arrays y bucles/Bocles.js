console.log("Tema: Bucles"); 
/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/* === Ciclo for === 
Se repite hasta la condicion evaluada de false. Crea 3 expresiones opcionales: 
*Sintaxis 
       for (expresionInicial; expresionCondicional;
        *Codigo a ejecutar en cada iteración del bucle);
    
        1.-Inicialización: se debe iniciar con una variale que sera evaluada en la expreesión a comparar. 
        2.- Condición: Es una expresión que se debe cumplir la variable inicial (true), sino se cumple (false) el bucle termina. 
        3.- pasos a realizar: Son los intervalos que cambiarán la variable inicial mientras que sea true. 

//Crear un programa para saber cuantos boletos vendemos para una rifa*/

for(let boleto = 1; boleto <=25; boleto ++){
    console.log(`boleto # ${boleto}`);
}
// programa para vender bolos con varialble global
let bolos = 1;

for (bolos; bolos <= 20; bolos ++){
    console.log(`vendí ${bolos}`); 
}

//Cuenta regresiva
/*let cuentaRe = 5;
for (cuentaRe;; cuentaRe--){
    console.log (`cuenta regresiva ${cuentaRe}`); 
}*/

/* Recorrer arrays con el ciclo for 
Debemos usar indices del arreglo para poder usar el bucle, en indices desde el 0 hasta n y usaremos la propiedad Length*/

//=====================Faltante del programa 

//Suma de numeros del 1 al 20 
let suma = 0; 
for (let i = 1; i <= 20 ; i++){
    suma += i
}
console.log(suma); 

//Tabla 5 
const tabla = 5;
for (let i=1; i<= 10; i++){
    let resultado =tabla*i; 
    console.log(`${tabla} x ${i} = ${resultado}`);
}
/* ========== Ciclo While =========
Recorre un bloque de codigo siempre que una condición especifica sea verdadera. 
*/

let productos = 5;
while (productos > 0){
    console.log (productos + "productos vendidos"); 
    productos--;
}

//imprimir números 
let num1 = 0;
while (num1 <10) {
    num1 ++ 
    console.log("el numero es" + num1);
}
