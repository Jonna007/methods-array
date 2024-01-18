/*1. Ingresar un nombre con promp y verificar 
si el nombre ingresado se encuentra en el vector*/

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

let ingresarNombre = prompt("Ingresa un nombre para verificar:");

if (students.includes(ingresarNombre)) {
    alert("Si se encuentra");
} else {
    alert("No se encuentra");
} 