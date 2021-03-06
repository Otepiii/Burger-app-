var connection = require("../config/connection.js");
var orm = {

    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (error, res) {
            if (error) throw error;
            callback(res);
        });
    },

    // insertOne: function (burger_name, callback) {
    //     console.log("string",burger_name);

    //     connection.query("INSERT INTO burgers burger_name SET ?", {
    //         burger_name:burger_name,
    //         devoured:0
    // }, function (error, res) {
    //         if (error) throw error;
    //         callback(res);
    //     });
    // },

    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?',
            {
                burger_name: burger_name,
                devoured: false,
            }, function (err, result) {
                if (err) throw err;
                callback(result);
            });
 
    },

    updateOne: function (id, devoured, callback) {
        var newBool = devoured == true ? false : true;
        console.log(newBool);
        connection.query("UPDATE burgers SET ? WHERE ?", [
            { devoured: newBool}, { id: id }],
            function (error, res) {
                if (error) throw error;
                callback(res);
            })
    }


}

module.exports = orm;