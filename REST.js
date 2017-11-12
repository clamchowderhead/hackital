var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

    router.get("/rants/",function(req,res){
    	var query = "SELECT * FROM ??";
        var table = ["rant"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Rants" : rows});
            }
        });
    });


    router.get("/compliments/",function(req,res){
    	var query = "SELECT * FROM ??";
        var table = ["compliments"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Compliments" : rows});
            }
        });
    });

    router.post("/rants",function(req,res){
        var query = "INSERT INTO ??(??, ??) VALUES (NULL,?)";
        var table = ["rant","id","rant",req.body.rant];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Rant Added !"});
            }
        });
    });

    router.post("/compliments",function(req,res){
        var query = "INSERT INTO ??(??, ??,??) VALUES (NULL,?,NULL)";
        var table = ["compliments","id","compliment","rating",req.body.compliments];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Compliment Added !"});
            }
        });
    });
}

module.exports = REST_ROUTER;