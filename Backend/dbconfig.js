const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"vikas@123",
    database:"new_project"
})

module.exports = db;