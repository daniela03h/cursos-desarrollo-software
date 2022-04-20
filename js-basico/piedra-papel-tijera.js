
function piedraPapelTijera(opcionJugador) {
  const opciones = ['piedra', 'papel', 'tijera']
  const opcionAleatoria = Math.floor((Math.random() * (2 - 0 + 1)) + 0);
  const opcionMaquina = opciones[opcionAleatoria]

  if (opcionJugador === opcionMaquina) {
    return console.log('Empate' + opcionJugador);
  }

  if (opcionJugador === 'piedra' && opcionMaquina === 'tijera') {
    return console.log('Tu ganas con' + opcionJugador);
  }

  if (opcionJugador === 'papel' && opcionMaquina === 'piedra') {
    return console.log('Tu ganas con' + opcionJugador);
  }

  if (opcionJugador === 'tijera' && opcionMaquina === 'papel') {
    return console.log('Tu ganas con' + opcionJugador);
  }

  return console.log('La maquina gana con' + opcionJugador);

}

piedraPapelTijera('tijera')