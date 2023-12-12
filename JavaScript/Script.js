//comentarios una sola linea 
/*Comentarios multilinea*/

//alert("Hola mundo");
//console.log("este es un dato para la console");
//var nombre =prompt("ingresa tu nombre");
//alert("hola, "+ nombre + "Bienvenido a ch35");

//var numero1 = parseInt(prompt("Ingresa el primer numero"));
//var numero2 = parseInt(prompt("ingresa el segundo numero"));

//console.log("suma:"+(numero1 + numero2));
//console.log("resta:"+(numero1 - numero2));
//console.log("multiplicación:"+(numero1 * numero2));
//console.log("división:"+(numero1 / numero2));

//var edad = prompt("ingresa tu edad");

/*if (edad >=18) {
    alert("Adelante brow");
}
//else {
    alert("Bebe no pasas, sorry")
}
if (edad >=18 &&  edad <= 65){
    alert ("Si pasas brow")
}
if (edad >65){
    alert ("My brow, muy viejo pa")
}*/
// Tipos de datos y variables
// var, let y const la diferencia es el alcance var tiene un alcance global, let tienen alcance local y const se mantiene sin ningun cambio 
/* String; cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*Todas nuestras variables con nombres especificos y claros, sin espacios, no deben iniciar con numeros*/
let nombre = "Daniel";
let invitadosExtras = 2; 
let esMayorEdad = true;
let edad = 24;
let invitadoEspecial = null;
let horaDesalida= undefined;

console.log (nombre);
document.write(nombre);

/*Encasillamiento o tipado nos es util para el mantenimiento del codigo ya que lo hace mas legibley facil de entende
Prevención de errores para reducir la probabilidad de los mismos mejora el rendimiento de nuestro programa*/

/*let numero = 15; 
let texto ="Hola";

// Con encasillamiento 
let nuemroEncasillado = Number = 5;
let textoEncasillado = String ="Hola";*/

/*Typeof palabra reservada para sabes que tipo de dato tenemos 

Conversión de String a Numbre 
console.log(typeof(nombre));
let functionNumbre = console.log(typeof Number (nombre));
metodoParseInt = console.log (typeof parseInt(nombre)); 
metodoParseFloat =console.log (typeof parseFloat(nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en numeros, ambas nos ayudan en el cambio*/

/*Conversión de numero a string 

console.log (typeof String (edad));
console.log(typeof edad.toString()); */

/*Convertir un Boolian to Number 

let numero = Number(esMayorEdad);
console.log(typeof(numero));

let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());*/

/*let negación = !esMayorEdad;
console.log (negación);*/

/* concatenar es unir Strings 
let saludo =" Hola humnx ";
let frase = "el futuro es hoy";
text = saludo + frase ;

document.write(text);*/

//Continuación Daniel
let firstName;
firstName = "Diego";
let lastName = "González";

console.log (firstName + " " + lastName);

/*ECMAScript 6 (ES6). Interpolación de cadenas
Backticks ´´
variables ${}
Texto para string */
let age = 28;
console.log(`Mi nombre es ${firstName}, 
mi apellido es ${lastName}
y tengo ${age} años`);

//console.warn();
console.warn("precaución, no es buena práctica dejar sin punto ");
console.error("status 404:Failed");

/* Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
Los arrays se pueden manipular mediante métodos específicos.
Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.Posee n cantidad de eleemtos, se declara como variables, segido del signo igual y corchetes de cada corchete vive un elemento con tipo de dato.
*/
let arreglo1 = [];//Array vacío
console.log(`Array vacío ${arreglo1}`);
let cars = ["VW","BMW","KIA","Mazda"];
console.log(cars);
//Longitud e indice no son iguales. Longitud es el num de elementos y el indice corresponde a cada elemento a partir del 0.
console.log(typeof(cars)); //Output:object
//Array de Numbers
let salariesMxn = [15000, 17000, 13000, 14000, 12000, 18000];
console.log(salariesMxn.length);//output: 6 
console.log(salariesMxn);


/* Objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar informacion mediante llaves (clave) y valores.
Su sintaxis es la siguiente 
const object {
    clave1: valor1 (dato1),
    clave2: valor2 (dato2)
} 
Los objetos pueden almacenar diferentes tipos de valores. */
const employee = {
    firstName: "Diego",
lastName: "González",
age: 27,
country: "Mexíco"
}
console.log(employee);
console.table(employee);
