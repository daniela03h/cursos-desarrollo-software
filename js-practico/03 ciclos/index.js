for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0
while (i < 5) {
    console.log("El valor de i es: " + i); 
    i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i=i-1
}


let respuesta = prompt('Cuanto es 2+2?') 
if (respuesta === '4') {
    alert('Felicitaciones')
} else {
    respuesta = prompt('Cuanto es 2+2?') 
}


