var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
  resultado.send("te amo <strong>amor</strong>")
}

function cursos(peticion, resultado) {
  resultado.send("estos son los <strong>cursos</strong>")
}

aplicacion.listen(8989);