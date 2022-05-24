const primerElemento = (unArray) => {
 console.log(unArray[0])
}

const frutas  = ["Manzana", "Banano", "Cereza", "Fresas"];

primerElemento(frutas)


const imprimirElementosArray = (unArray) => {
  unArray.forEach((elemento)=>{
      console.log(elemento)

  })
}

imprimirElementosArray(frutas)

const persona = {
    nombre: 'daniela',
    apellido: 'londono',
    edad: 28,
}

const imprimirElementosObjeto = (objeto) => {
    Object.keys(objeto).forEach((elemnto)=> {
        console.log(objeto[elemnto])
    }) 
}

imprimirElementosObjeto(persona)