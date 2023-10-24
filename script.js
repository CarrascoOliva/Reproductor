// Definimos un array de objetos, donde cada objeto representa una canción con su ruta, nombre e imagen
var canciones = [
  {
    ruta: "recursos/Cull.mp3",
    nombre: "Cull",
    imagen: "recursos/lolpentakill.jpg"
  },
  {
    ruta: "recursos/dos.mp3",
    nombre: "Ultra",
    imagen: "recursos/goku.jpg"
  },
  {
    ruta: "recursos/Infinity Edge.mp3",
    nombre: "Infinity Edge",
    imagen: "recursos/tres.jpg"
  }
];

// Obtenemos los elementos del DOM que vamos a utilizar
var reproductor = document.getElementById("reproductor");
var fuente = document.getElementById("fuente");
var lista = document.getElementById("listaCanciones");
var botonDesplegar = document.getElementById("botonDesplegar");
var listaCanciones = document.getElementById("listaCanciones");

// Definimos la función que se ejecutará cuando se haga clic en el botón desplegable
botonDesplegar.onclick = function () {
  // Si la lista de canciones está oculta, la mostramos. Si está visible, la ocultamos.
  if (listaCanciones.style.display === "none") {
    listaCanciones.style.display = "block";
  } else {
    listaCanciones.style.display = "none";
  }
}

// Función para cargar una canción en el reproductor
function cargarCancion(indice) {
  // Obtenemos la canción del array de canciones
  var cancion = canciones[indice];

  // Actualizamos la fuente del reproductor y el nombre de la canción
  fuente.src = cancion.ruta;
  document.getElementById("nombreCancion").textContent = cancion.nombre;

  // Actualizamos la imagen de fondo con la imagen de la canción
  document.getElementById("contenedor").style.backgroundImage = "url('" + cancion.imagen + "')";

  // Ajustamos el tamaño de la imagen de fondo para que cubra todo el contenedor
  contenedor.style.backgroundSize = "cover";

  // Cargamos la canción en el reproductor y empezamos a reproducirla
  reproductor.load();
  playSong();
}

// Función que se ejecuta cuando se selecciona una canción de la lista
lista.onchange = function () {
  cargarCancion(this.value);
}

// Función para cambiar de canción (adelante o atrás)
function cambiarCancion(direccion) {
  // Obtenemos el índice de la canción actual
  var indiceActual = canciones.findIndex(c => c.ruta === fuente.src);

  // Calculamos el nuevo índice teniendo en cuenta la dirección y el número total de canciones
  var nuevoIndice = (indiceActual + direccion + canciones.length) % canciones.length;

  // Cargamos la nueva canción en el reproductor
  cargarCancion(nuevoIndice);
}

// Función para activar o desactivar el bucle del reproductor
function bucle() {
  reproductor.loop = !reproductor.loop;
}

// Función para seleccionar una canción aleatoria
function aleatorio() {
  var indiceAleatorio = Math.floor(Math.random() * canciones.length);

  // Cargamos la canción aleatoria en el reproductor
  cargarCancion(indiceAleatorio);
}

// Función para reproducir una canción
function playSong() {
  reproductor.play();
}

// Al inicio, cargamos la primera canción del array en el reproductor
cargarCancion(0);