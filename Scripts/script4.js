let peso = parseFloat(prompt("Ingrese su peso"));

switch (true) {

    case peso < 50 :
        alert("Bajo peso");
    break;
    case peso >= 50 && peso < 70:
        alert("Estás dentro del promedio");
    break;
    case peso >= 70 && peso < 90:
        alert("Tienes sobrepeso");
    break;
    case peso >= 90:
        alert("Sufres de obesidad mórbida");
    break;
    default:
        if (isNaN(peso)) {
            alert("Ingrese su peso en forma de número");
        } else {
            alert("Padeces obesidad mórbida");
        }

        }






    