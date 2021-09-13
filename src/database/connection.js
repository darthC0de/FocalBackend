const knex = require('knex');
const configuration = require('../../knexfile');

const dotenv = require('dotenv')
dotenv.config()

const connection = knex(configuration[process.env.NODE_ENV?process.env.NODE_ENV: 'development']);

module.exports = connection;