// Tenemos un li de productos
//Diego Arturo González 4/5
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", imagen : "./taco-azul.jpg"},
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById('lista-de-productos'); // Se llama el elemento por id
const textoIngresado = document.querySelector('.input'); // Se modificó el nombre de la variable de tipo const

function crearElemento(tag, clases = []) {
  const elemento = document.createElement(tag);
  elemento.classList.add(...clases);
  return elemento;
}

function agregarProductoALI(producto) {
  const divProducto = crearElemento("div", ["producto"]);

  const parrafoTitulo = crearElemento("p", ["titulo"]);
  parrafoTitulo.textContent = producto.nombre;

  const imagen = crearElemento("img");
  imagen.setAttribute('src', producto.img);

  divProducto.appendChild(parrafoTitulo);
  divProducto.appendChild(imagen);

  listaDeProductos.appendChild(divProducto);
}

function limpiarLista() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }
}

function filtrado(productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

// Inicializar la lista de productos
for (let i = 0; i < productos.length; i++) {
  agregarProductoALI(productos[i]);
}

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.addEventListener('click', function () {
  limpiarLista();

  const texto = textoIngresado.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    agregarProductoALI(productosFiltrados[i]);
  }
});