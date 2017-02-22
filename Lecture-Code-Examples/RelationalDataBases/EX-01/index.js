'use strict';

var mysql = require('mysql');

//connect to the database
var databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ITR123',  //mysql root password
    database: 'store'
});

// open database connection and query it
databaseConnection.query('SELECT * FROM customer', function (error, rows){
    if(error){
        console.log('DATABASE ERROR: ');
        console.log(error);
    } else {
        console.log('ROWS');
        console.log(rows);
        console.log(rows[2].firstName);
    }
});


databaseConnection.end(function(error){
    console.log('TERMINATED DATABASE CONNECTION');
})
// 2 ways to terminate database connections:
//1. .end - graceful - waits for processes to end before closing connections
//2. .destroy just shuts it down
