var connection = require("./connection");
var orm = {

    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res) {
            if (err)
                throw err;
            // console.log(res)
            cb(res);
        })
    },
    insertOne: function(values, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        var query = connection.query(queryString, [values], function(err, res) {
            if (err)
                throw err;
            // console.log(res)
            cb(res);
            
        })
        console.log(query.sql);
    },
    updateOne: function(set, where, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [set, where], function(err, res) {
            if (err) 
                throw err;
            // console.log(res)
            cb(res);
        })
    }
}

module.exports = orm;


