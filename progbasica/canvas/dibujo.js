var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var colorcito = "#FAA"
var xi, yf;
var espacio = ancho / lineas;

while(l < lineas)
{
  yi = espacio * l;
  xf = espacio * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300)
  console.log("linea " + l)
  l = l + 1;
}

dibujarLinea(colorcito, 1,1,1,300);
dibujarLinea(colorcito, 1,299,299,299);

l = 0
while(l < lineas)
{
  xi = espacio * l;
  yf = espacio * (l + 1);
  dibujarLinea(colorcito, xi, 0, 300, yf)
  console.log("linea " + l)
  l = l + 1;
}

dibujarLinea(colorcito, 300,1,1,1);
dibujarLinea(colorcito, 299,299,299,1);

}