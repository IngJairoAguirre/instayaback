const mongoose = require('mongoose');
//const uri="mongodb+srv://Gpo13:Gpo13@instaya.8gazhot.mongodb.net/mensajeria?retryWrites=true&w=majority";
mongoose.connect("mongodb+srv://Gpo13:Gpo13@instaya.8gazhot.mongodb.net/mensajeria?retryWrites=true&w=majority");
//mongoose.connect("mongodb://localhost:27017");
const objetobd = mongoose.connection
objetobd.on('connected',()=>{console.log('InstaYa del Grupo13: Conexion exitosa a Atlas, el servicio de MongoDB en la nuve')})
objetobd.on('error',()=>{console.log('Error en la conexion a MongoDB')})
module.exports = mongoose