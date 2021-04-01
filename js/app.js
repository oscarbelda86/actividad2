"use strict";
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var descripcion = document.getElementById("descripcion");
function checkinputtelefono() {
    if (telefono.length != 9) {
        alert("inserte un numero de 9 digitos");
    }
}
checkinputtelefono();
formulario.addEventListener("submit", function (evento) {
    alert("Hemos recibido sus datos, pronto nos estaremos comunicando con usted.");
});
function limpiarDatos() {
    alert("apretaste limpar datos");
}
