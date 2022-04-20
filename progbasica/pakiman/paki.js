var imagenes = [];
imagenes["cauchin"] = "vaca.webp";
imagenes["pokacho"] = "pollo.webp";
imagenes["tocinauro"] = "cerdo.webp";

var cauchin = new pakiman("cauchin", 100, 30);
var pokacho = new pakiman("pokacho", 80, 50);
var tocinauro = new pakiman("tocinauro", 120, 40);

var coleccion = [];
coleccion.push(new pakiman("cauchin", 100, 30));
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("tocinauro", 120, 40));

for (var freddito of coleccion) {

  freddito.mostrar();
}
for(var x in coleccion[0]){

  console.log(x);
}