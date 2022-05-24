var frutas  = ["Manzana", "Banano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); /*Me dice cuantos elementos tiene el array*/

console.log(frutas[0]); /*Acede a un elemnto en la posicion que yo quiero*/

var masFrutas = frutas.push("Uvas"); /*Mutar los que no quiero*/

var ultimo = frutas.pop("Uvas")/*Elimina el ultimo elemento que existe en el array*/

var nuevaLongitud = frutas.unshift("Melon"); /*Agrega un elemento al principio*/

var borraFruta = frutas.shift("Melon"); /*Eliminar el elemento al inicio*/

var posicion = frutas.indexOf("Cereza"); /*Saber la posicion del elemnto*/