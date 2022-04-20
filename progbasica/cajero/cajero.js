class Billete {
  constructor(v, c, i) {
    this.imagen = i;
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles, bi.imagen));
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "soy un cajero malo, he sido malo y no puedo darte esa cantidad";
  }
  else {
    resultado.innerHTML = "";
    for (var billeteEntregado of entregado) {
      if(billeteEntregado.cantidad > 0){
        saldoEnCajaActual = saldoEnCajaActual - (billeteEntregado.cantidad * billeteEntregado.valor)
        resultado.innerHTML = resultado.innerHTML + billeteEntregado.cantidad + " billetes de" + "<img src='"+ billeteEntregado.imagen +"' width='120px'/>" + "<br />";
      }
    }
    saldoCaja.innerHTML = saldoEnCajaActual
  }
  entregado = [];
}

var saldoCaja = document.getElementById("saldo-caja");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero)

var caja = []; // Es la lista de los billetes y sus cantidades
var entregado = []; // Es la lista de los billetes a entregar y sus cantidades
var dinero = 0; // El valor de dinero solicitado a retirar
var div = 0; //
var papeles = 0; //
var saldoEnCajaActual =0;

caja.push(new Billete(50, 10, "50usd.jpg"));
caja.push(new Billete(20, 5, "20usd.jpg"));
caja.push(new Billete(10, 10, "10usd.jpg"));

for(var billeteASumar of caja){
  saldoEnCajaActual += billeteASumar.valor * billeteASumar.cantidad
}
saldoCaja.innerHTML = saldoEnCajaActual




