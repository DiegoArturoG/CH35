const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`; //Corrección de comillas
const $n = document.querySelector('.name');//notación de clase
const $b = document.querySelector('.blog');//notación de clase
const $l = document.querySelector('.location');

//función asíncrona con palabra reservada async
async function displayUser(username) {
 
  //promesa con try
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);//llamada a response
  const data = await response.json();

  console.log(data); //llamamos un console.log para verificar 
  $n.textContent = `${data.name}`; //Corrección de comillas
  $b.textContent = `${data.blog}`;//Corrección de comillas
  $l.textContent = `${data.location}`;//Corrección de comillas
  } catch(err){
  handleError(err); //llamamos la función catch para mostrar un error si es necesario
}

}

function handleError(err) {
  //console.log de error
  console.log(err);
$n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);