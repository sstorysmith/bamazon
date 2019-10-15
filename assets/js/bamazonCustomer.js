var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
    alert("connected to database");
  if (err) throw err;
  runSearch();
});

let totalPurchases = 0.00;

// function getCutomerInput() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "LIST - list all items for sale.",
//         "ID - Enter the ID of the items you'd like to buy.",
//         "BUY - Enter the count of how many items you'd like to BUY.",        
//       ]
//     })
//     .then(function(answer) {
//       switch (answer.action) {
//         case "LIST":
//           displayAllItems();
//           break;

//         case "ID":
//           idSearch();
//           break;

//         case "BUY":
//           buyProduct();
//           break;
//       }
//     });
// }

// function idSearch() {
//   inquirer
//     .prompt({
//       name: "artist",
//       type: "input",
//       message: "What ID would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT id,dept, name, price position FROM products WHERE ?";
//       connection.query(query, { id: answer.id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log("ID: " + res[i].id + " || name: " + res[i].name + " || price: " + res[i].price);
//         }
//         runSearch();
//       });
//     });
// }

// function allSearch() {
//   var query = "SELECT *  FROM products GROUP BY dept HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//        console.log("ID: " + res[i].id + " || NAME: " + res[i].name + " || PRICE: " + res[i].price + " || INVENTORY: " + res[i].count);
//     }
//     runSearch();
//   });
// }

// function buyItem() {
//   inquirer
//     .prompt({
//       name: "buyID",
//       type: "input",
//       message: "Enter product id to buy?"
//     })
//     .then(function(idReply) {


//     get the product information
//     connection.query("SELECT idReply.id FROM products WHERE id=idReply.id, function(err, res)); 
      // if (count < orderedCount) {
      //     alert(`Insufficient quantity!`);
      // }
      // else {
        
//       inquirer
//     .prompt({
//       name: "buyCount",
//       type: "input",
//       message: "Enter count of items to buy?"
//     })
//     .then(function(countAnswer) {
      // if (count < countAnswer) {
      //     alert(`Insufficient quantity!`);
      // }
      // else {

       
//       console.log("Function order: "answer:action + "   answer.command: " + buy id "  productReply.buyID: ");

//       get the product information
//       connection.query("SELECT productReply.id FROM products WHERE id=productReply.id, function(err, res) 

        // update inventory by count ordered    
        // newCount= count - answer.order;
        //     alert("function order: " +  answer.order + "  new inventory count: " + newCount);
    // UPDATE products SET Count = ( Count- countReply.count) WHERE ID = Id;

        // update product inventory count//         
          // connection.query("SELECT answer.id FROM products WHERE id=answer.id UPDATE count=newCount?", function(err, res) {console.log(
//           "ID: " +
//             query.id +
//             " updated from inventory count: "+ query.count + " to new count" + newcount);}  
//         );
          totalPurchases += query.price;
//        CustomerInput();
//       });
//     });
// }