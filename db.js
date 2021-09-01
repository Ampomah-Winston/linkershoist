const {Pool} = require('pg');//postgres connection library
// const {Client} = require('pg');
require('dotenv').config();
const parse = require('pg-connection-string').parse; 
const devConfig = parse(`postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`)

// const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: true
//     }
//   });

// client.connect();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ,
  ssl: process.env.DATABASE_URL ? true : false
})

// module.exports = client;
module.exports = pool;
