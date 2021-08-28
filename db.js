const Pool = require('pg').Pool;//postgres connection library
require('dotenv').config();
var parse = require('pg-connection-string').parse; 
var devConfig = parse(`postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`)

// const devConfig = {
//     user : process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE
// }
const proConfig =  process.env.DATABASE_URL //heroku addons 

const pool = new Pool(
    process.env.NODE_ENV === 'production' ?{ connectionString : proConfig} :devConfig
);

// const pool = new Pool(devConfig)

module.exports = pool