const connection = require("./connection");

function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num ; i++) {
    arr.push("?")
  }
  return arr.toString();
}

// Helper function to convert key value pairs to SQL syntax
function objToSql(obj) {
  let arr = [];

  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// Object for all sql functions
const orm = {
  selectAll: (tableInput, cb) => {
    console.log(tableInput);
    let queryString = "SELECT * FROM " + tableInput + ";"
    connection.query(queryString, (err, res) => {
      if (err) throw err; 
      cb(res);
    })
  },
  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      cb(res.insertId);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }  
}
module.exports = orm;