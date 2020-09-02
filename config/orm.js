const connection = require("./connection");

const orm = {
  selectAll: (cb) => {
    connection.query("SELECT * FROM burgers_db", (err, data) => {
      if (err) cb(err, null);
      cb(null, data);
    })
  }
}

module.exports = orm;