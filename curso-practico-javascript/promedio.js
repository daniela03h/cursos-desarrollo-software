// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumatoria = 0;
// for (let i = 0; i < lista1.length; i++) {
//     sumatoria += lista1[i];
// }

// const promedio = sumatoria / lista1.length;

// console.log(promedio);


function calcularMediaAritmetica(lista) {

//     let sumatoria = 0;
// for (let i = 0; i < lista.length; i++) {
//     sumatoria += lista[i];
// }

const sumatoria = lista.reduce(
   function (valorAcumulado = 0, nuevoElemento) {
       return valorAcumulado + nuevoElemento;
   } 
);

const promedio = sumatoria / lista.length;

return promedio

}

