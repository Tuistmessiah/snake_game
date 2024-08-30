const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSOWRD', // YOUR PASSWORD
    database: 'snake_game'
});

module.exports = connection;
