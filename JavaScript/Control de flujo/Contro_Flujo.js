console.log ("Hola CH35");
/*Control de flijo y estructuras de control
*
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista */

/* Declaración de sentencias if-else
If para comenzar la declaración, se coloca () donde se colaca la expresión logica (true or false), se {} para indicar que sentencia va a ejecutar si la condición se cumple (true), Despues de {} declaradas para el bloque de ejecución if, el siguente elemento es else (palabra reservada) para el ejemplo; no colocacaremos expresiones dentro de () simplemente colocaremo otras llaver {} indicando el bloque de codigo a ejecutar si la condicion no se cumple (false)
*/

let n = 5;

if (n >10){
    console.log(true);
}
else {
    console.log(false); 
}

/*if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso*/

//If anidados 
let edad = 67;
if (edad <18){
    console.log("Eres menos de edad, morrit@");
} else if (edad >= 18 && edad <65) {
    console.log("Eres un adulto, bebe!");
}else {
    console.log("Eres adulto mayor y viejo");
}
/* Sentencia switch es otro tipo de estructura de control de flujo y s encuentra en diversos lenguajes de programación
Es parecida a la sentencia if- else pero la diferencia esta en el comportamiento pues switch no se basa en la bifurcación, sino secciones en multiples casos (case) y dependiendo de la expresión que cumpla con el caso especifico, sera la secuencia que se va ajecutar, dentro de la declaracion.
Declaración:
Se empieza por colocar la palabra reservada switch, seguido colooamos parentesis () donde se debe colocar el valor que va indicr la senencia/caso a ejecutar.
Boloque de codigo se limita a esta sentencia, colo lo haciamos en la sentencia if o con las funciones. Dentro falta colocar los casos para cada valor que se desea establecer según sea el valor indicado dentro del parentesis(). Cada uno de estes se separa de la siguiente manera: case valor: Instucción a ejecutar si el valor empata con  este caso. 
Despues, para indicar la ejecución de las sentencias debe contarse cuando se cumplio, se coloca la instruccion break 
Cuando terminamos de establecer los casos que nesecitamos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
*Esta ultima sentencia nos permite establecer un valor por defecto, si el volor colocado no empata con ninguno otro dentro de la sentencia default: mensaje no disponible.

*/
 let dia ="martes" ;
 switch (dia){
    case "lunes":
        console.log ("Inicio de semana");
        break; 
    case "martes":
        console.log ("Apenas es martes");
        break;
    case "miercoles":
        console.log ("toca presentar proyecto");
        break;
    case "jueves":
        console.log ("Juebebes");
        break;
    case "viernes" :
        console.log ("Amonos al party, aqui espantan");
        break;
    case "sabado" :
        console.log ("Un relax y taquitos");
        break;
    case "domingo" :
            console.log ("Domingo de pelis");
            break;
default:
    console.log ("dia desconocido");
    break;
 }//aquí termina mi switch

 /*Operador ternario 
Expresión condicional if-else más simple y legible 
principalmente se usa para simplificar condiciones de una solo expresión y puede anudar sentencias if-else-if, pot otro lado no se recomienda hacer muchas anidaciónes porque se puede volver confuso o poco entendible 
*Declaración:
1.- var, let o const:
2.- asignar nombre como si fuera una variable, despues operador "=" siguiente es colocar expresión logica, contenido dentro del (), despues hay que colocar un caracter ? que indica el camino a segir, dependiendo de si, se cumple o no la expresion. Separa la condicion true or false se debe agregar un caracter : y de lado Izq se coloca la sentencia a ejecutar. 
Si se cumple la condición, de lado derecho se coloca la sentencia ejecutar. */

let verificacion = n > 10 ? "Si es mayor" : "No es mayor"
console.log (verificacion);

/* cuando usar if-else u cuando usar switch?
if-else: cuando se requiere tomar decisiones mas flexibles 
switch: cuando tengamos un conjunto fijo de valores para comparar una expresion */

