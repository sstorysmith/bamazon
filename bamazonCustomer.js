var inquirer = require("inquirer");


//MySQL will need to be changed if installed for a new user
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon",
});

connection.connect(function(err) {
  if (err) throw err;
});

let totalPurchases = 0.0;
getCustomerInput();

function getCustomerInput() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["SEARCH", "LIST", "BUY", "QUIT"],
    })
    .then(function(answer) {
      if (answer.action === "LIST") {
        displayAllItems();
      } else if (answer.action === "SEARCH") {
        idSearch();
      } else if (answer.action === "BUY") {
        buyProduct();
      } else if (answer.action === "QUIT") {
        console.log("Total Amount of ALL purchases: " + totalPurchases);
        process.exit();
      } else {
        console.log("No match for " + answer.action);
      }
    });
}

function idSearch() {
  let ID = 0;
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "What ID would you like to search for?",
    })
    .then(function(answer) {
      let ID = parseInt(answer.id);
      var query = "SELECT * FROM products WHERE Id= " + answer.id;
      connection.query(query, { Id: answer.Id }, function(err, res) {
        if (err) {
          console.log("Select error:" + query);
          console.log(err);
          return;
        } else {
          for (var i = 0; i < res.length; i++) {
            console.log(
              "ID: " +
                res[i].Id +
                " || ProdName: " +
                res[i].ProdName +
                " || Price: " +
                res[i].Price
            );
          }
        }
        getCustomerInput();
      });
    });
}

function displayAllItems() {
  var query = "SELECT * FROM products ORDER BY ProdName";
  connection.query(query, function(err, res) {
    if (err) {
      console.log("Select error:" + query);
      console.log(err);
      return;
    } else {
      for (var i = 0; i < res.length; i++) {
        console.log(
          "Id: " +
            res[i].Id +
            " || NAME: " +
            res[i].ProdName +
            " || PRICE: " +
            res[i].Price +
            " || quantity: " +
            res[i].Qty
        );
      }
      getCustomerInput();
    }
  });
}

function buyProduct() {
  let newQty = 0;
  inquirer
    .prompt({
      name: "buyId",
      type: "input",
      message: "Enter product id to buy?",
    })
    .then(function(answer) {
      //get the product information
      var item = answer.buyId;
      var query = "SELECT * FROM Products WHERE ?";
      connection.query(query, { Id: answer.buyId }, function(err, r) {
        if (err) {
          console.log("select error:" + query);
          console.log(err);
          return;
        } else {
          inquirer
            .prompt({
              name: "buyCount",
              type: "input",
              message: "Enter count of items to buy?",
            })
            .then(function(reply) {
              if (parseInt(reply.buyCount) > parseInt(r[0].Qty)) {
                console.log(`Insufficient quantity!` + r[0].Qty);
                getCustomerInput();
                return;
              } else {
                //update quantity by count ordered
                let newQty = parseInt(r[0].Qty) - parseInt(reply.buyCount);

                let query = "UPDATE products SET Qty=" + newQty + " WHERE ?";
                connection.query(query, { Id: answer.buyId }, function(
                  err,
                  responseUPD
                ) {
                  if (err) {
                    console.log("ERROR");
                    console.log(err);
                    return;
                  } else {
                    console.log(
                      "ID: " +
                        answer.buyId +
                        " updated from Quantity: " +
                        r[0].Qty +
                        " to New Quantity: " +
                        newQty
                    );
                    let totBought = (
                      parseFloat(r[0].Price) * parseInt(reply.buyCount)
                    ).toFixed(2);
                    console.log("Total Bought: " + totBought);
                  }
                  totalPurchases += (
                    parseFloat(r[0].Price) * parseInt(reply.buyCount)
                  ).toFixed(2);

                  getCustomerInput();
                });
              }
            });
        }
      });
    });
}
