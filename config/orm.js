var connection = require("../config/connection.js");
var orm = {

    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (error, res) {
            if (error) throw error;
            callback(res);
        });
    },

    insertOne: function (burger_name, callback) {
        connection.query("INSERT INTO burgers ? SET ?", [{
            burger_name: burger_name,
            devoured: false
        }], function (error, res) {
            if (error) throw error;
            callback(res);
        });
    },

    updateOne: function (id, callback) {
        connection.query("UPDATE burgers SET ? WHERE?", [
            { devoured: true }, { id: id }],
            function (error, res) {
                if (error) throw error;
                callback(res);
            })
    }

}

module.exports = orm;