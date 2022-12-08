const express = require('express');
const app = express();
const cors = require("cors");
app.use(

    cors({
  
      origin: "*",
  
    })
  
  );

// Importar conexion mongoDB
const archivoBD = require('./conexion')

//Importacion de rutas y modelo de envio
const rutaenvio = require('./rutas/envio')

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:'true'}))

app.use('/api/envio',rutaenvio)

app.get('/', (req, res) => {
    res.end("Bienvenido al server Back-End InstayaGrupo13 Node.js corriendo...")
})


//Configurar server basico
app.listen(5000,function(){
    console.log('El servidor NODE InstayaGrupo13 va corriendo correctamente');
})