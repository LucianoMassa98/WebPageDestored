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



