var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500},
  { nombre: "Libro", costo: 320},
  { nombre: "Celular", costo: 10000},
  { nombre: "Laptop", costo: 20000},
  { nombre: "Teclado", costo: 500},
  { nombre: "Teclado", costo: 1700},
];

/* .find no ayuda a encontra algo adentro del articulo, valida si existe o no existe, retorna el primer elemento de un array que cumple con una condicion definica en un nuevo array*/

var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre ==="Laptop"
});

/* .forEach no genera un nuevo array - ejecuta la funcion indicada una vez por cada elemento del array*/

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

/* .some validacion de verdadero o falso*/

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});

/* .push agrega elementos*/
articulos.push({ nombre: "mouse", costo: 600})