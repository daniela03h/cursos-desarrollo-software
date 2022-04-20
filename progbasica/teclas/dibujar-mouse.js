var isMouseClicked = false
var LEFT_BOTTON_MOUSE = 1


document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mousedown", mouseClicked);
document.addEventListener("mouseup", mouseUnclicked);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;


dibujarLinea("red", x, y, x, y, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento) {
  if (isMouseClicked == true) {
    console.log('dibujarMouse', evento)
    var colorcito = "green";
    dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
    x = evento.offsetX
    y = evento.offsetY
  }

}

function mouseClicked(evento) {
  console.log('mouseClicked', evento)
  if (evento.which == LEFT_BOTTON_MOUSE) {
    x = evento.offsetX
    y = evento.offsetY
    isMouseClicked = true
  }
}
function mouseUnclicked(evento) {
  console.log('mouseUnclicked', evento)
  if (evento.which == LEFT_BOTTON_MOUSE) {
    isMouseClicked = false
  }
}