
//Declarar función
function agregarElementoAlArray(arr, nuevoElemento) {
    arr.push(nuevoElemento);
    return arr; // Puedes devolver el array actualizado si lo necesitas
  }
  
  //  uso de la función
  var miArray = ["Mazda", "VW","Audi","BWD","Cupra","Porsche", "Ferrari","BMW","MB","Maclaren"];
  var nuevoElemento = "Alfa Romeo";
  
  var resultado = agregarElementoAlArray(miArray, nuevoElemento);
  
  console.log(resultado); 

  
 

