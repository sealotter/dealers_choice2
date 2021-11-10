const pg = require('pg');
const client = new pg.Client('postgres://localhost/dealerschoice');

client.connect();

module.exports = client;