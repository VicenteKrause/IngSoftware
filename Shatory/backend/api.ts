

const express = require('express');

const app = express();
const port = 3001;


const bodyParser = require('body-parser');
const cors = require('cors');

// var connection = mysql.createConnection({

//     host    : process.env.HOST,
//     user    : process.env.USER,
//     port    : process.env.BD_PORT,
//     password: process.env.BD_PASSWORD,
//     database: process.env.DATANAME
// });

// connection.connect(function(error:any){

//     if(error){
//         console.log('No conectado')
//         return;
//     }
//     console.log('Conectado')
// });

app.get('/', (req: any, res: any) => {

    res.send('Hello World');
})

app.listen(port, () => {

    console.log(`Escuchando en puerto ${port}`);
})


