// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad = 13;
if (edad <18){
    console.log("No puedes votar, suerte para el proximo sexenio");
} else if (edad >= 18 && edad <120) {
    console.log("Adelante, puedes votar");
} 

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let n = 8;

if (n % 8 ==0 || n % 7 == 0){
    console.log(true);
} else {
    console.log(false)
}


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
let number = 8;

if (number % 4 ==0 || number % 9 == 0){
    console.log(true);
} else {
    console.log(false)
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let peli ="accion" ;
 switch (peli){
    case "accion":
        console.log ("Recomiendo: 60 segundos");
        break; 
    case "drama":
        console.log ("Recomiendo: valiente");
        break;
    case "comedia":
        console.log ("Recomiendo: ¿Que culpa tiene el niño?");
        break;
    case "romance":
        console.log ("Recomiendo: Bajo la misma estella");
        break;
    case "suspenso" :
        console.log ("Recomiendo: Amores perros");
        break;
    case "terror" :
        console.log ("Recomiendo: La monja");
        break;
    
default:
    console.log ("Genero desconocido");
    break;
 }
/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
let operacion = prompt("Bienvenido, elige la operación a realizar; 1. Retiro dinero 2. Transferencia 3. Depósito 4. Pago de sevicios");
operacion = parseInt(operacion);
if (operacion ==1){
    alert (`Opción ${operacion} : Retirar dinero`);} 
else if (operacion ==2){
    alert (`Opción ${operacion} : Transferencia`);}
else if (operacion ==3){
        alert (`Opción ${operacion} : Depósito`);}
else if (operacion ==4){
        alert (`Opción ${operacion} : Pago de servicios`);}
else {
        alert (`Opción ${operacion} : Opción no valida`);}

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let cantidadPesosmxn = 50; 
const dolarE = 0.058;
const euro =0.053;
const yenes = 831.98;
const libra = 4.55;
const franco = 0.051;

function conversor (cantidadPesosmxn) {
    return cantidadPesosmxn * dolarE;
}
let resultadoDolar = conversor(cantidadPesosmxn);


function conversor (cantidadPesosmxn) {
    return cantidadPesosmxn * euro;
}
let resultadoEuro = conversor(cantidadPesosmxn);

function conversor (cantidadPesosmxn) {
    return cantidadPesosmxn * yenes;
}
let resultadoYenes = conversor(cantidadPesosmxn);

function conversor (cantidadPesosmxn) {
    return cantidadPesosmxn * libra;
}
let resultadoLibra = conversor(cantidadPesosmxn);

function conversor (cantidadPesosmxn) {
    return cantidadPesosmxn * franco;
}
let resultadoFranco = conversor(cantidadPesosmxn);

let divisa ="Dolar";
 switch (divisa){
    case "Dolar":
        console.log (`Tu conversión es: ${resultadoDolar} dollares`);
        break; 
    case "Euro":
        console.log (`Tu conversión es: ${resultadoEuro} euros`);
        break;
    case "Yenes japoneses":
        console.log (`Tu conversión es: ${resultadoYenes} yenes japoneses`);
        break;
    case "Libra esternila":
        console.log (`Tu conversión es: ${resultadoLibra} Libra esternila`);
        break;
    case "Franco suizo" : 
        console.log (`Tu conversión es: ${resultadoFranco} Franco suizo`);
        break; 
    
default:
    console.log ("Divisa desconocida");
    break;
 }