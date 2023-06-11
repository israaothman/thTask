const pg = require('pg');

const client = new pg.Client('postgres://postgres:0000@localhost:5432/companyx');

module.exports = client;