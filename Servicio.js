const Contenido = require('./Contenido')
const Categorias = require('./Categoria')

const express = require('express');
const app = express();

app.get('/', (req, res) => (res.send(Contenido)));
app.listen(4000, () => (console.log("Servidor en linea en el puerto 4000")));
