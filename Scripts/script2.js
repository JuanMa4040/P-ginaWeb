let age = prompt ('¿Cuántos años tienes?');

alert(`Tienes ${age} años!`); //Tienes 100 años!

alert("I'm Javascript!");

function alerta() 
{
let mensaje;
let opcion = prompt("Introduzca su nombre:");

if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}