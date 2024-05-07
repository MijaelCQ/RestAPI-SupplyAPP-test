require('dotenv').config();

const configApp = {}

configApp.PORT= process.env.PORT || 4000;
configApp.DB_DATABASE= process.env.DB_DATABASE ||'basemico';
configApp.DB_USER= process.env.DB_USER || 'root';
configApp.DB_PASSWORD= process.env.DB_PASSWORD || 'sucursalperu';
configApp.DB_HOST= process.env.DB_HOST || 'localhost';
configApp.DB_PORT= process.env.DB_PORT || '3306';


module.exports = configApp