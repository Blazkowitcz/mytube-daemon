const mysql = require('mysql');
const conf = require('../../conf.json');
const db = mysql.createConnection({
    host: conf.database_address,
    user: conf.database_user,
    password: conf.database_password,
    database: conf.database_name
});

db.connect(function(err){
    if(err) {throw err;}
});

module.exports = { db };