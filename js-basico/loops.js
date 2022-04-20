var estudiantes = ["Daniela", "Pistacho", "Felipe", "Sofia"];

function saludarEstudiantes(){
  console.log(`Hola, ${estudiante}`);
}

/*opcion 1 i*/

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]);
}

/*opcion 2 of*/

for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante[i]);
}