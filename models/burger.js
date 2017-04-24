var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cn) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.export = burger;
