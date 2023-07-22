let countero = 0;
alert( ++countero ); // da 1

let counteri = 0;
alert( counteri++ ); // da 0

let counters = 4;
counters++;
alert(counters);

let counter = 2;
counter++;      // funciona igual que counter = counter + 1, pero es más corto
alert( counter ); // 3

let age = prompt ("Cuantas materias te llevaste?");
alert(`Así que te llevaste ${age} materias nada más...`); 

let madurez = confirm("Estás estudiando?");
if (madurez) {
	alert("Dejá de mentir estás todo el día en la compu");
} else 
{
	alert("Anda a estudiar no seas tonto");
}


let adress = confirm("tienes una linda novia?");
if (adress){
    alert("yo tambien creo que es linda");
} else {
    alert("Seguro que eres gay...");
}


let fulbito = confirm("te gusta levantarte temprano?");

if (fulbito) {
    alert("mentira");
} else {
let waterpolo = confirm("osea que eres un dormilon comilon");

if (waterpolo) {
    alert("Lo sospechaba");
} else { 
	alert("deja de mentir...");
}
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