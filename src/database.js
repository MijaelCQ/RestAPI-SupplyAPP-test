const createPool = require('mysql2/promise').createPool
const configApp=require('./config.js');

const pool = createPool({
    host: configApp.DB_HOST,
    user: configApp.DB_USER,
    password: configApp.DB_PASSWORD,
    database: configApp.DB_DATABASE,
    port: configApp.DB_PORT
})

module.exports=pool


