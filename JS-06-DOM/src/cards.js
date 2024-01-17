/*
* Para manipular a información de un usuauo, necesito crear un perfil mediante un objeto de JS
*/

const user = {
    username : 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favfilms: ['interstellar', 'Se7en','Mindhunter', 'Mean Girls', 'Sherk']
}

//Crear una función que me permita ingresar el objeto del perdil en el nodo padre
const createUser = (user) =>  {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando elementos de lista en forma vertical
    //Para mostrar el array en forma de lista utilizando un ciclo forEach para recorrer todo el array y traer cada elemento a la lista
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    })
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#B2D6C7";


    //Mostrando elementos de lista en forma horizontal
    // document.getElementById("fav-films").textContent = user.favfilms;
}

//Invocando la función
createUser(user);

/*
*Eventos apra actualiza el username mediante el input y el boton
*/
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})

profileBtn.addEventListener("click", () => {
    userEmail.textContent = inputEmail.value;
}

)