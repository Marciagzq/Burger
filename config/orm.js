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
    updateOne: function(tableName, columns, where, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableName, columns, where], function(err, res) {
            if (err)
                throw err;
            // console.log(res)
            cb(res);
        })
    }
}

module.exports = orm;


