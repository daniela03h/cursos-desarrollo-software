const lista1 = [500, 200, 100, 40000000];

function calcularMediaAritmetica(lista) {
  const sumatoria = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedio = sumatoria / lista.length;

  return promedio;
}


function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


function calcularMediana(arrayNumbers) {
    const arrayOrdenado = arrayNumbers.sort((a, b) => a - b)
    const mitadLista1 = parseInt(arrayOrdenado.length / 2);
    let mediana;

    if (esPar(arrayOrdenado.length)) {
      const elemento1 = arrayOrdenado[mitadLista1 - 1];
      const elemento2 = arrayOrdenado[mitadLista1];
    
      const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
      mediana = promedioElemento1y2;
    } else {
      mediana = arrayOrdenado[mitadLista1];
    }

    return mediana
}

console.log(calcularMediana(lista1))

// if (lista1 es par?) {
//     necesitamos dos elementos
//     --> el promedio
//     --> mediana
// } else {
//     posicion mitadLista1 dentro lista1
//     --> mediana
// }




function sumarNumeros(numero1, numero2, queHago){
    if (queHago === "sumar"){
        return numero1 + numero2
    } else if (queHago === "restar") {
        return numero1 - numero2
    } else {
        return "no se que hacer"
    }
}

console.log(sumarNumeros(1,2))