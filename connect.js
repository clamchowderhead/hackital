var mysql = require('mysql');

var con = mysql.createConnection( {
	host: "54.167.102.0",
	user: "admin",
	password: "s3cret",
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
}
);