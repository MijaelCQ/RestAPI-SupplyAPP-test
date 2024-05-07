const express = require('express');
const morgan=require('morgan');
const configApp=require('./config.js');

const pool = require('./database.js');
const app=express();


pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error al obtener conexión del grupo de conexiones:', err);
      return;
    }
    
    connection.release();}
  );    
//settings
app.set(configApp.PORT);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/users",require('./routes/users.routes'));
app.use((req, res, next)=>{
  res.status(404).json
    ({
      message:'Endpoint not found'
    })
})

module.exports=app;
    