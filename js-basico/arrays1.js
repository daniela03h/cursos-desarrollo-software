var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500},
  { nombre: "Libro", costo: 320},
  { nombre: "Celular", costo: 10000},
  { nombre: "Laptop", costo: 20000},
  { nombre: "Teclado", costo: 500},
  { nombre: "Teclado", costo: 1700},
];

/* 1 metodo ayuda a filtrar con filter*/

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});

articulosFiltrados

/* 1 metodo mapea ciertos articulos con map, crea un nuevo array con los resultados de la llamada a la funcion indicada aplicada a cada uno de los elementos*/

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});
