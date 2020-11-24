const express = require('express');
const app = express();

//Paquete body-parser.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');

app.use(require('./controladorReserva'));

//Conexión a mongoose.
mongoose.connect('mongodb://localhost:27017/reservas3', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

//Establecer la conexión con el servidor.
mongoose.connection
  .once('open',()=>console.log("Conectado a la BD."))
  .on('error',(error)=> console.log(error));
  app.listen(3000, () => {
    console.log("El servidor está operativo en el puerto 3000.");
});