//programación sincrónica
function two () {
    console.log("dos");
}
function one () {
    console.log("uno");
    two (); 
    console.log("tres");
}

one (); 


//programación asincrona
//SetTimeout que recibe una función anónima y establece un timepo de ejecucion para cumplir con la condicion de asincronismo
const towAsync = () => {
    setTimeout (() => {
    console.log("dos Async");}, 5000 );
}
const oneAsync =()=> {
    setTimeout (function() {
    console.log("oneAsync")
    }, 2000);
    towAsync();
    console.log("tres Async");
}
oneAsync();

//trabajando con promesas mediante Ferch API 

const url = "https://jsonplaceholder.typicode.com/users";
//Usando fetch para mostrar en consola

fetch (url)//Si se cumple la promesa entrega los datos de la API, en tipo json para mostrarlos en consola
.then(data => data.json())
.then(data => {
    console.log(data[0].name);//Yo puedo mandar a llamar los datos que me interesen o bien todos los datos
    console.log(data);
})
.catch(error => console.error("¡Ups, aldo salio mal!", error));

//Usando fetch para mostrar en navegador 
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje"); 
//Variable para guardar la info que se va a traer desde la API: debe ser de tipo null
let post= null; 

//Consumiendo API con Fetch (promesas)
botonInfo.addEventListener("click", () => {fetch("https://jsonplaceholder.typicode.com/users/8")
.then(response => response.json())
.then(response => {
    post = response;//Guardo los datos de response en la variable de tipo null, para que modificar el dato. mandamos a llamar la variable desde la función.
    mostrarDatos(post);
})
 .catch(error =>console.error("¡Problemas! ", error));
});


//Funcion que me permita controlar o manipular la variable de tipo null

const mostrarDatos = (post) => {
    //creando nodos 
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    //ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);


}

//Fetch mostrar productos 
const botonPro = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonPro.addEventListener("click", () => {fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(response => {
    productos = response;//Guardo los datos de response en la variable de tipo null, para que modificar el dato. mandamos a llamar la variable desde la función.
    mostrarPro(productos);
})
 .catch(error =>console.error("¡Take care! ", error));
});

//funcion para crear, agregar y mostrar elementos desde el dom
const mostrarPro = (productos) =>{
    //mando a llamar title, price, description, category desde al API
    productos.map((productos) => { //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
    const image = document.createElement("img"); 
    const titulo = document.createElement("h2"); 
    const precio = document.createElement("h3"); 
    const descripcion = document.createElement("p"); 
    const categoria = document.createElement("p"); 
    const separador = document.createElement("hr"); 
    //enviar a HTML con innerhtml
    image.src = productos.image;
    image.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

    tienda.appendChild(image);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    })
}

//Método POST utilizando fetch. Me permite crear recursos en la API

fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo POST 
    method:"POST",
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title,body)
    body: JSON.stringify({
        userId: 1986, //userId insertar variables para desspues poderlas llamar 
        title: "Sueña los andrides con ovejas eléctricas?",
        body: "Author: Phillipe K. Dick"
    }),
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    }
})
//inicio de mis promesas
.then(response => response.json ())
.then(response => { console.log(response)
})


/******** Programación asíncrona (promise)  
 Función flecha de tipo async-await
 1.- indicar que es una función asincrona con la palabla async
*/
const getUser = async () => {
    //para que se cumpla la promesa, no utilizamos then, sino que usamos try.y en errores se sigue utilizando catch
try{//Retardo para que se ejecute de manera asíncrona 
    await new Promise(resolve =>setTimeout(resolve,3000));
    //promesa que se ejecuta 
    const response =  await fetch("https://jsonplaceholder.typicode.com/users/4");
    const data =  await response.json();
    console.log(data);

} 
catch(error){
    console.log("Error inexplicable", error);
}
}
//invocar función 
getUser();


/* >>>>>>>>> LocalStorage <<<<<<<<*/
//nos permite modificar, eliminar, guardar objetos de JavaScript de manera local (en el equipo).
//Crear un objeto de JS  con sus llaves y valores 
const user = {
    id: 2,
    name: "Diego",
    apellido: "González",
    email: "Diegoargr@gmail.com",
    Puesto: "Diseñador",
    empresa: "CDMIT"
}
//convertir el objeto a notacion JSON y almacenarlos en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el LocalStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(user);

//sessionStorage solamente mientras la sesion este activa. 