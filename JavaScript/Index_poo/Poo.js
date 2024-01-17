/* Paradigmas de programación 
Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuncia determinada. 

Programación basada en eventos: Se basa en la gestión y respuesta de eventos .

Programación declarativa: Explica lo que queremos obtener. 

Programación orientada a objetos: Toman cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas como sus caracteristicas (propiedaddes o atributos) y sus comportamiento o acciones (metodos). 
*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir el tipo de objeto y crear instancias de este tipo de objeto. 

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
    //El constructor es una función especial, cuya finalidad es la de construir o inctanciar objetos 
//objeto: para inicializar un objeto es necesario definir un constructor que tomará los atributos 
//clases = molde ; Objeto= Gomita ; Constructor= Cheff ; atributos = ingredientes Metodos= comportamientos

constructor (nombre,apellido,edad,email,telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono; 
}
comer(){
        console.log("Bon apetit"); 
    }//metodo comer
    bailar (){
        console.log("Dale hasta el suelo");
    }//metodo bailar 
    mostrarInfo (){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido ",this.apellido);
        console.log("Edad: ",this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }
}

let usuario1 = new persona ("Fernanda", "Ramos", 31, "fernanda@gmail.com", "5574905321");
let usuario2 = new persona("Aldo", "Solares",24,"aldo@gmail.com","5540403092");
let usuario3 = new persona ("Denisse", "Rodriguez", 35, "deniseg@gmail.com", 6690403821); 
let usuario4 = new persona("Karla", "zuñiga", 26, "karlazu@gmail.com", "5509876543");
let usuario5 = new persona("Jesus", "Ferrer",50,"jesus@hotmil.com", "5579323502");

console.log(usuario2);//imprime todos los atributos de ese objeto
console.log(usuario3.email);//imprime el atributo especifico 
console.log(usuario1.email,usuario2.email,usuario3.email);

usuario4.comer();//Invocando el metodo 
usuario1.bailar();
usuario2.comer(); 
usuario2.mostrarInfo();

//pilares de la programación orientada a objetos 

/*
-Herencia:Nos permite heredar a clases inferiores para poder optimizar el programa 
-Polimorfismo: Tener objetos de diferentes tipos que pueden ser manupulados en comun (posibilidad de realizar cambios en distintos objetos que comparten atribitos entre si)
-Encapsulamiento: ocultar o exponer cosas que sean reelevantes
-Abstracción 
*/

//Ejemplo Herencia 

class arrendador extends persona{ //Esto es una SUBCLASE
    capacidad = 0;
    costo = 0;
    nombreLugr = "";

    constructor(nombre,apellido,edad,email,telefono, capacidad, costo, nombreLugr){
        super(nombre,apellido,edad,email,telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugr= nombreLugr;
    }

    mostrarInfo(){
        console.log("capacidad", this.capacidad);
        console.log("costo" , this.costo);
        console.log("nombre del lugar:" , this.nombreLugr);
    }
}

let arrendador1 = new arrendador (
    "Arturo", "Palencia", 29, "Arturo11@gimail.com", "5566993344", 100, 10000, "EventsandmoreArtuuu");

console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo(); 
/*class arrendadorCDMX extends arrendador{
} */

//Segundo ejemplo
class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();


//Ejercicio Polomorfismo 

class producto {
    marca = "";
    precio = 0;

    constructor(marca,precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion (){
        console.log("Marca");
        console.log("precio"); 

    }
}

let producto1 = new producto("cerave",85);


//Encapsulamiento 

class Usuario {
    #contraseña;

    constructor(User,correo,contraseña){
        this.User =User;
        this.correo = correo;
        this.contraseña =contraseña; 
    }
    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña; 
    }
}



//Abs: Traer objetos del mundo real y aplicarlos mediante clases,metodos, constructores y objetos 

//Los objtos de tipo Json en un formato de intercambio de datos ligero, accesible, estricturado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch



let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",
//cadena de texto se difetencia porque nos da mas flexibilidad y esto nos permite manifularlos datos mas facil 
}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principios solid
/*Principio de responsabilidad unica (Single Responsability principle) Una clase de tener asignada una tarea o responsabilidad especifica y esta no deberia de cambiar 
2. Principio abierto/cerrado (Open/closed principle OCP)
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma. 
3. Principio de sustitución de Liskov (Liskov sustitucion Pricile LPS)
Una clase hijo puede sustituir objetos de una clase padre 
4. Principio de segregación de interfaces (Interface segregation Principle ISP) Es la delimitación de los metodos que nesecito y el dejar fuera los que no 
5. Principio de inversion de dependencias (Dependency Inversion Principle DIP)
*/

/* Programa que conste de una clase llamada alumno que tenga como atrubutos nombre y calificación. Definir los metodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no 

Atributos 
nombre 
calificación 

metodos 
imprimirCalificacion 
evaluacion 

la calificación aprobatoria es de 6
if para evaluar la calificación 

*/

//================================ Solución al ejercicio ========================== 

class alumno {
    nombreAl = "";
    calificacion = 0;

    constructor (nombreAl, calificacion){
        this.nombreAl = nombreAl; 
        this.calificacion = calificacion; 
    }
    infoAlumno(){
        console.log(`${this.nombreAl} tiene una calificación de ${this.calificacion}`);
        }
        evaluacion() {
            if (this.calificacion >= 6) {
                console.log(`${this.nombreAl} ha aprobado.`);
            } else {
                console.log(`${this.nombreAl} no ha aprobado.`);
            }

    }
}
const alumno1 = new alumno("Ximena", 5);
const alumno2 = new alumno("Diego", 10);

alumno1.infoAlumno();
alumno1.evaluacion();

alumno2.infoAlumno();
alumno2.evaluacion();

