let formulario:any=document.getElementById("formulario");
let nombre:any=document.getElementById("nombre"); 
let apellidos:any=document.getElementById("apellidos");
let rut:any=document.getElementById("rut");
let email:any=document.getElementById("email");
let telefono:any=document.getElementById("telefono");
let descripcion:any=document.getElementById("descripcion");

let inputs = document.querySelectorAll("input");

formulario.addEventListener("submit",function(evento:any){
    alert("Hemos recibido sus datos, pronto nos estaremos comunicando con usted.");
})

function limpiarDatos(){
    inputs.forEach(function(input){
        if(input.type=="checkbox" || input.type=="radio"){
            input.checked = false;
        }
        else if(input.type=="range"){
            input.value = '5';
        }
        else{
            input.value = '';
        } 
    }
    )
    descripcion.value = '';
};