var mysql = require('mysql');

config = {
   host: '127.0.0.1',
   user: 'root',
   password: 'dil@1998',
   database: 'seqsqltest', 
   port: 3306, 
   multipleStatements: true
}

var dbconnection = mysql.createPool(
  config
);

// Attempt to catch disconnects 
dbconnection.on('connection', function (connection) {
  console.log('SQL DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });

});


module.exports = dbconnection;