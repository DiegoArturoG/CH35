/* 
==Arrays==

Agrupación de elementos en una misma variable, donde estan ubicados en posiciones del array. 

Arrays: se utilizan para almacenar y organizar datos de manera efectiva.
*/
//Crear un Array 
const numeros = [1,2,3,4,5];
//En cadena de texto
const comida= ["sushi","carne", "verduras", "pastas"];
console.log(comida);
// Array mixto
const mixto = [
    "puma","Gato",
    8,
    true,
    {nombre: "Diego"}
];
console.log(mixto); 

//Array vacio 
const marketplaceList = [];

//Agregar elementos al array 
marketplaceList [0] = "milk";
marketplaceList [1]= "chiken"; 
marketplaceList [2]= "tomatoe";
marketplaceList [3]= "eggs";
console.log(marketplaceList);

//Otra manera de crearlos
const frutas = new Array ("manzanas", "Naranjas", "uvas","platano");

/*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array*/
console.log(frutas); 
console.log(frutas.length); 


// Acceder a los elementos de array 
console.log(marketplaceList[2]);
console.log(frutas[1]);//indefinido si el elemento esta fuera del rango 

//Modificar elementos 
const cremeria = ["Queso Oaxaca", "Jamón", "Queso Canasto", "Salchicha", "Queso panela"]; 
console.log(cremeria);
cremeria [3] = "Yogurt"; //cambio del elemento 
console.log(cremeria);
cremeria [1] = "Quesillo";
cremeria[2]="Danonino";
console.log(cremeria);

//Arreglo de arreglos o miltidimencional
console.log("Arreglo de arreglos");

//Estados : "Estado de México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"

// Platillos: "Guajalocombo", "Torta ahogada", "Panuchas", "Dogos", "Tlayuda", "Tacos" 

const Estados = ["Estado de México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"]; 
const Platillos = ["Guajalocombo", "Torta ahogada", "Panuchas", "Dogos", "Tlayuda", "Tacos" ];

const menu = [Estados, Platillos];
console.log(`En ${menu[0][1]} tambien se come ${menu[1][2]}`);
/*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.*/

// Métodos de Arrays
/*Métodos de cola (queue). Implica agregar elementos al final de Array y eliminar los elementos del principio. Sigue el principio FIFO (first-in-first-out).Significado: primer elemento añadido, primer elemento eliminado.
*push
*Shift
*Unshift 

Método de pila (stack). Implica agregar elementos al final del Array y eliminar elementos del final. Sigue el principio LIFO (last-in-first-out), significado: el ultimo elemento añadido es el primero en ser eliminado 
*push
*pop
*/
console.log("Metodos de Arrays");
const ch35= ["Dany","Fer","Mara","Gaby","Mar","Paola","Enrique"]; 
console.log(ch35);

//pop()Eliminar ultimo elemento del array
let popch35 = ch35.pop(); //Devuelve el dato elminado 
console.log(popch35);
console.log(ch35); //Visualiza la elimina el dato de la lista 

//push () Agregar al final del array 
let pushch35 = ch35.push("Mony");
console.log(ch35); 

//shift() quitar primer del Array
let shiftch35 = ch35.shift();
console.log(ch35); 

//unshift () agrega al principio del Array
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35); 

//reverse () Camabia el sentodo del ordenamiento del Array
let reversech35 = ch35.reverse();
console.log(ch35); 

//Investigar: -sort, -forEach, -slice, -splice, indexOf