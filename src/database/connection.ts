import knex from 'knex';

require('dotenv').config();

console.log(process.env.DB_HOST);

const db = knex({
  client: 'postgresql',
  connection: {
    host:     process.env.DB_HOST,
    port:     Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
      rejectUnauthorized: false
    }    
  },
  useNullAsDefault: true
});

export default db;