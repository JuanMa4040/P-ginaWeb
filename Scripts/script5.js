let palabra = prompt("Palabra", "");
let regex = /^[A-Za-z]+$/;
if (regex.test(palabra)) {
    alert("Bien")
} else {
    alert("Mal");
}