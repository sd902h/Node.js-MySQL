require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,

  // Your port; if not 3306
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_USERNAME,

  // Your password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(results);
    askID();
  });
}
function askID() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the item_id you would like to buy?"
      },
      {
        name: "count",
        type: "input",
        message: "Product count?"
      }
    ])
    .then(function(answer) {
      checkDB(answer.item_id, answer.count);
    });
}

function checkDB(itemID, itemCount) {
  connection.query(
    "SELECT * FROM products WHERE item_id = ?",
    [itemID],
    function(err, results) {
      if (err) throw err;
      if (itemCount <= results[0].stock_quantity) {
        connection.query(
          "UPDATE products SET stock_quantity = stock_quantity - ?",
          [itemCount]
        );
        console.log("order success");
      } else {
        console.log("Insufficient quantity!");
      }
    }
  );
}
