const express = require('express');
require('dotenv').config(); //Se requiere instalar el paquete: npm i dotenv
const cors = require('cors');

const {dbConnection} = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar cors
app.use(cors());

// Base de datos
dbConnection();


// Rutas 
// req: viene informacion de los headers, que cliente fue
// resp: lo que nosotros o nuestro servidor va a responder
app.get('/', (req, resp)=> {
    resp.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(process.env.PORT, ()=> {
    console.log('Servidor corriendo en puerto' + process.env.PORT);
});
