let age = prompt ('¿Cuántos años tienes?', "Introduce tu edad");
alert(`Tienes ${age} años!`); //Tienes 100 años!


let adress = confirm("Vives en Rosario?");
if (adress){
    alert("Maldito comegato");
} else {
    alert("Menos mal");
}




let isBoss = confirm("¿Eres el jefe?");
if (isBoss) {
    console.log("Tomatelas");
} else {
    console.log("Sos pobre");
}

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