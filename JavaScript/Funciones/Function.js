/* 
Funciones. son bloques de codigo con instrucciones que pueden reutilizar la veces que sean necesarias. Algunas funciones reciben parametros y otras no */
//Funciones normales se llaman por declaración
function saludar() {
    console.log("Hola desde una función");
}
//Ejecuta la función con el nombre de la función y los parametros 
saludar();
//Hoisting nos permite invocar estes de su inicialización, es decir, se puede invocar antes del codigo o despues
function saludar() {
    console.log("Hola invocando la función con hoisting");
}
saludar ();

//Funciones que retornan algo para esta funcion de retorno (String, operación, una variable, etc.). Necesitamos indicarle código de la finción que vamos a retornar mediante la palabra retorno
function greeting() {
    return "Hola desde una función que retorna";
    
} 
console.log(greeting());

//función que retorna y recibe parámetros
function sumar(x, y){
    return x + y;
}
let resultado = sumar (255, 245);
console.log (resultado);

//Calcular el cuadrado de un número 
function calCuadrado (numero) {
    return numero * numero;
}
let resultadoCuadrado = calCuadrado(5);
console.log(resultadoCuadrado);
//Función flecha (Arrow function). Es una manera de declarar una función por declaración, sintetizando código y haciendolo más legible.

//Función flecha para calcular el cubo de un numero 
const CalcCubo = (number) => {
    return number * number * number
}
let resultCubo = CalcCubo(3);
console.log(resultCubo);
// Funciones anónimas; tipos de funciones declaradas sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que las utilicemos. No permiten el hoisting (no se puede invocar antes de inicializar)
const mensaje = function(){
    return "este es un mensaje desde una función anónima";
}
console.log (mensaje()); 

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.

const funcionB = function (){
    console.log("Ejecutando función B");
}
const funcionA = function (Callback){
    Callback(); 
}
funcionA(funcionB);