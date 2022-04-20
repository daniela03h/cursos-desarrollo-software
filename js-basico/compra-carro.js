function puedeComprarCarro(saldo) {
  
  if(saldo >= 30000){
    console.log('Puedo comprar camioneta')
  } else if(saldo < 30000 && saldo >= 10000) { 
    console.log('Puedo comprar carro')
  } else {
    console.log('sigue ahorrando')       
  }
}

puedeComprarCarro(32000)