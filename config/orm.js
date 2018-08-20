var connection = require("/connection.js");
var orm = {

    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (error, res) {
            if (error) throw error;
            cb(res);
        });
    },

    insertOne: function (burger_name, cd) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function (error, res) {
            if (error) throw error;
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        connection.query("UPDATE burgers SET ? WHERE?", [
            { devoured: true }, { id: id }],
            function (error, res) {
                if (error) throw error;
                cd(res);
            })
    }

}

module.exports = orm;