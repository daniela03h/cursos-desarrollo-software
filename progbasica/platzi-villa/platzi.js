var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var posCerdoX = 0;
var posCerdoY = 0;

document.addEventListener("keydown", onPresionarFlechas);

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
  url: "tile.webp",
  cargaOK: false
};

var vaca = {
  url: "vaca.webp",
  cargaOK: false,
  pintada: false,
};

var cerdo = {
  url: "cerdo.webp",
  cargaOK: false
};

var cantidad = aleatorio(0, 15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar(posCerdoX, posCerdoY);
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar(posCerdoX, posCerdoY);
}

function cargarCerdos() {
  cerdos.cargaOK = true;
  dibujar(posCerdoX, posCerdoY);
}

function dibujar(nuevaPosCerdoX, nuevaPosCerdoY) {
  if (fondo.cargaOK);
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK);
  {
    papel.drawImage(cerdo.imagen, nuevaPosCerdoX, nuevaPosCerdoY);
  }
}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
function onPresionarFlechas(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      posCerdoY = posCerdoY - 10
      dibujar(posCerdoX, posCerdoY)
      break;
    case teclas.DOWN:
      posCerdoY = posCerdoY + 10
      dibujar(posCerdoX, posCerdoY)
      break;
    case teclas.LEFT:
      posCerdoX = posCerdoX - 10
      dibujar(posCerdoX, posCerdoY)
      break;
    case teclas.RIGHT:
      posCerdoX = posCerdoX + 10
      dibujar(posCerdoX, posCerdoY)
      break;
  }
}