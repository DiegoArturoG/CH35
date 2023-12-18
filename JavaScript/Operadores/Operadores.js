/* ======= Operador =======
Es un signo que específica una determinada operación

====== Operadores arítmeticos ====
+, -, *, /, %, ++, -- 

======= Operadores de asignación ===
 (=)

 ======= Operadores logícos ===
 &&, ||, ! 

 ======== Operadores de comparación ==
 ==; ===, !=, !==, >, <, >=, <= 

 ======= Operadores de cadena ===
 tolowerCase, toUpperCase, trim, toString, concat, + 

Operadores aritmeticos 
(+) se utiliza para sumar dos numeros 
(-) "     "    para restar dos o mas num
(*) "            "  multiplicar uno o mas num
(/) "            "  Dividir uno o mas numeros 
(%) residuo es para saber si un numero es par o impar. 10%3 % es lo que sobra de una operacion aritmetica 
(++) incremento, aumento de uno en uno la cantidad o el numero 
(--) decremento, disminuye de uno en uno la cantidad o el numero 

*/

let num1=10;
let num2=5; 
suma = num1 +num2; 
resta = num1 -num2;
multiplicacion = num1 * num2;
division = num1/num2;
residuo = num1%num2
incremento = num1;
incremento ++;
decremento = num2;
decremento --; 

console.log(suma); 
console.log(resta); 
console.log(multiplicacion);
console.log(division); 
console.log(residuo); 
console.log(incremento);
console.log(decremento);  

let precioReal =1000; 
let porcentajeDes =20; 
let cantidadDescuento = (precioReal*porcentajeDes)/100; 
let precioCondescuento= precioReal- cantidadDescuento;

console.log (`Su precio real es ${precioReal}MXN y tiene un descuento de ${porcentajeDes}%, su precio final es de: ${precioCondescuento}MXN con una cantidad descontada de ${cantidadDescuento}MXN`);

/*
=====Operadores de asignación 
No compara, asigna
let furtas = manzanas;*/

/*Operadores de comparación*/
//Ejemplo ==; Igualdad, compara si son iguales 
let numero3 =10;
let text ="10"; 
console.log(numero3 == text);

console.log(numero3 === text);//Igualdad estricta porque tiene que ser tanto en valor como tipo de dato. 

/*(!=) Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499; 
let precioMax = 1500; 

if (precioCaja != precioMax){
    console.log("El precio del producto no es igual al precio maximo");
} else {
    console.log("El precio del producto es igual al precio max permitido"); 
}

/*let number11= 10;
let number12= "10";

if (number11 != number(number12)){
    console.log("son diferentes los valores");
} else {
    console.log("los valores son iguales");
}*/

/* (!==) Desigualdad estricta, este operador verifica si dos valores no son iguales, pero a diferencia de la desigualdad, en este caso ambos valores deben tener el mismo tipo y valor*/

let number= 10;
let number1= "10";

if (number !== number1){
    console.log("son diferentes los valores");
} else {
    console.log("los valores son iguales");
}

/* (>) Indica si un valor es mayor que otro valor */

let puntuacionFinal =85; 
let puntuacionRequerida = 102;

console.log (puntuacionFinal > puntuacionRequerida); 

//(<) indica su un valor es menor que otro valor 

console.log (puntuacionFinal<puntuacionRequerida); 

//(>=) Mayor o igual, indica si un valor es mayor o igual a otro 

let edad= 28;
let edadRequerida= 18;
console.log (`Cumples con la edad: ${edad >=edadRequerida}`);

//(<=) Menor o igual indica si un valor es menor o igual a otro 

let tempAmbiente= 14; 
let TempMax= 21; 
console.log (tempAmbiente <= TempMax);

// Ejercicios en clase 
/*ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro

console.log ("Ejercicion en clase"); 

let numInicial =parseInt( prompt("Inserta un numero entero")); 
let numNext =parseInt(prompt("Ingresa el segundo numero")); 

console.log(`La condicion es : ${numInicial>=numNext}`);*/

/*ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no*/

/*let palabraUno =prompt("Ingresa una palabra"); 
let palabraDos= prompt("ingresa tu seguda palabra"); 
console.log (`Tus palabras son iguales: ${palabraUno === palabraDos}`); */

//Operadores Logícos 

/* (&&) and se utiliza cuando dos  condiciones deben cumplirse*/

let mayorEdad= 18;
let tieneIne= true;

if (mayorEdad >= 18 && tieneIne){
    console.log("puedes rentar el salon");
} else {
    console.log("no lo puedes rentar");
}


//(||) or se utiliza cuando se debe cumplir una condicion u otra  

let usuarioPrime = false;
let descuento = true;

if (usuarioPrime || descuento){
    console.log("califica para descuento");
} else{
    console.log("No califica");
}

//(!) NOT se utiliza para negar el valor de una condición 

let esDialibre = false;
if(!esDialibre){
    console.log("se trabaja");
} else {
    console.log("Descansito");
}


// Operadores de cadena
//toLowerCase hace el cambio de nuestro string a minusculas 

let mensajeUsuario = "Bienvenidos a la CH35";
let cambioMinusculas= mensajeUsuario.toLowerCase(); 
console.log(cambioMinusculas); 

//toUpperCase hace el cambio de nuestro String a mayusculas 

let cambiMayusculas= mensajeUsuario.toUpperCase(); 
console.log(cambiMayusculas); 

//trim quita los espacion

let aviso= "     ch35  rifa  ";
let sinEspacio = aviso.trim();
console.log(sinEspacio);

//toString convierte un tipo de dato number en string 

let numero10= 31;
let cambioTotring = numero10.toString();
console.log(cambioTotring);

//Concat

let nombre= "Diego";
let apellio = "González"
let nombreCompleto= nombre.concat(" ",apellio);
console.log(nombreCompleto);

/* Expresiones 
Expresiones aritmeticas 

let operacion= 14 + 25 *12; conmbina la suma con la multiplicación. 

Expresión de cadena 
let notificación de cadena ="Casi," + "año nuevo" ; Expresión concatenado 

Expresión logica 
let esMayordeedad = (23 >18) && (23 < 65); tiene operadores logicos y de comperación 

Expresión de asignación 
let frasco= chocolates; asigna el valor de chocolates a las variables */