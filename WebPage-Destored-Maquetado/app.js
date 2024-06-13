// Funciones para mostrar Servicios
// function mostrarDescripcionA(){
//     var descripcion = document.getElementById("descripcionA");
//     descripcion.style.display === "none" ? descripcion.style.display = "block" : descripcion.style.display = "none";
// }

// function mostrarDescripcionE(){
//     var descripcion = document.getElementById("descripcionE");
//     if (descripcion.style.display === "none") {
//         descripcion.style.display = "block";
//     } else {
//         descripcion.style.display = "none";
//     }
// }

// Opacidad del párrafo
// var parrafo = document.getElementById("descripcionA");
// parrafo.style.opacity = 0; // Inicializa la opacidad en 0

// document.getElementById("descripcionBtn").addEventListener("click", function() {
//   var opacity = 0;
//   var interval = setInterval(function() {
//     opacity += 0.1;
//     parrafo.style.opacity = opacity;
//     if (opacity >= 1) {
//       clearInterval(interval);
//     }
//   }, 50); // Cambia la opacidad cada 50 milisegundos
// });



// Mostrar la descripcion en los Servicios Ofrecidos
function mostrarDescripcionA() {
  var descripcion = document.getElementById("descripcionA");
  var boton = document.querySelector(".titulo-btnA button i");

  if (descripcion.classList.contains("visible")) {
    descripcion.classList.remove("visible");
    boton.classList.remove("fa-angle-up");
    boton.classList.add("fa-angle-down");
  } else {
    descripcion.classList.add("visible");
    boton.classList.remove("fa-angle-down");
    boton.classList.add("fa-angle-up");
  }
}

function mostrarDescripcionB() {
  var descripcion = document.getElementById("descripcionB");
  var boton = document.querySelector(".titulo-btnB button i");

  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
    boton.classList.remove("fa-angle-down");
    boton.classList.add("fa-angle-up");
  } else {
    descripcion.style.display = "none";
    boton.classList.remove("fa-angle-up");
    boton.classList.add("fa-angle-down");
  }
}

function mostrarDescripcionC() {
  var descripcion = document.getElementById("descripcionC");
  var boton = document.querySelector(".titulo-btnC button i");

  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
    boton.classList.remove("fa-angle-down");
    boton.classList.add("fa-angle-up");
  } else {
    descripcion.style.display = "none";
    boton.classList.remove("fa-angle-up");
    boton.classList.add("fa-angle-down");
  }
}

function mostrarDescripcionD() {
  var descripcion = document.getElementById("descripcionD");
  var boton = document.querySelector(".titulo-btnD button i");

  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
    boton.classList.remove("fa-angle-down");
    boton.classList.add("fa-angle-up");
  } else {
    descripcion.style.display = "none";
    boton.classList.remove("fa-angle-up");
    boton.classList.add("fa-angle-down");
  }
}

function mostrarDescripcionE() {
  var descripcion = document.getElementById("descripcionE");
  var boton = document.querySelector(".titulo-btnE button i");

  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
    boton.classList.remove("fa-angle-down");
    boton.classList.add("fa-angle-up");
  } else {
    descripcion.style.display = "none";
    boton.classList.remove("fa-angle-up");
    boton.classList.add("fa-angle-down");
  }
}



