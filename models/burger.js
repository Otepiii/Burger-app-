var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name,callback) {
    orm.insertOne(burger_name, function(res) {
      callback(res);
    });
  },
  updateOne: function(id,devoured, callback) {
    orm.updateOne(id,devoured, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;