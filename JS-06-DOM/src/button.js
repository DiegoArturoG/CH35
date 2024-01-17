
const conteiner1 = document.getElementById("container-div"); 
const button = document.getElementById("card-btn");
// agregando estilos al container para visibilidad
conteiner1.style.visibility = "visible"; 

//Manejando eventos para ocultar conteines desde el botón 

button.addEventListener("click", () => {
    conteiner1.style.visibility = (conteiner1.style.visibility === "visible") ? "hidden" : "visible"; 
});
