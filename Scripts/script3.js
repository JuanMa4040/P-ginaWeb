let cilinMoto = parseFloat(prompt("Ingresa cilindrada de tu motocicleta:"));

switch (true) {
  case cilinMoto >= 500 && cilinMoto < 1000:
    alert("Baja cilindrada");
    break;
  case cilinMoto >= 1000 && cilinMoto < 2000:
    alert("Cilindrada media");
    break;
  case cilinMoto >= 2000:
    alert("Alta cilindrada");
    break;
    default:
    if (isNaN(cilinMoto)) {
      alert("Ingresa un número por favor");
    } else {
      alert("Monopatines no pueden participar");
    }
}
