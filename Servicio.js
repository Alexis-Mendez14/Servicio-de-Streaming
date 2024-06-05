const Contenido = require('./Contenido')
const Categorias = require('./Categoria')

const express = require('express');
const app = express();

app.get('/', (req, res) => (res.send(Contenido)));
app.listen(3000, () => (console.log("Servidor en linea en el puerto 3000")));
