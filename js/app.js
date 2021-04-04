"use strict";
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var descripcion = document.getElementById("descripcion");
var inputs = document.querySelectorAll("input");
formulario.addEventListener("submit", function (evento) {
    alert("Hemos recibido sus datos, pronto nos estaremos comunicando con usted.");
});
function limpiarDatos() {
    inputs.forEach(function (input) {
        if (input.type == "checkbox" || input.type == "radio") {
            input.checked = false;
        }
        else if (input.type == "range") {
            input.value = '5';
        }
        else {
            input.value = '';
        }
    });
    descripcion.value = '';
}
;
